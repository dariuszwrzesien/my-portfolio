import React, { useEffect, useRef, useState } from "react";
import Phaser from "phaser";

interface SnakeGameProps {
  width?: number;
  height?: number;
  className?: string;
}

class SnakeScene extends Phaser.Scene {
  private snakeBody: Phaser.GameObjects.Rectangle[] = [];
  private food!: Phaser.GameObjects.Rectangle;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  public direction: string = "RIGHT";
  public newDirection: string = "RIGHT";
  private addNew: boolean = false;
  private score: number = 0;
  private scoreText!: Phaser.GameObjects.Text;
  public gameOver: boolean = false;
  private gameOverText!: Phaser.GameObjects.Text;
  private restartText!: Phaser.GameObjects.Text;
  private pausedText!: Phaser.GameObjects.Text;
  private gridSize: number = 10;
  private gameSpeed: number = 150;
  private isPaused: boolean = false;
  private gameStarted: boolean = false;
  private statusText!: Phaser.GameObjects.Text;
  private updateCount: number = 0;

  constructor() {
    super({ key: "SnakeScene" });
  }

  preload() {
    // No assets to preload for this simple snake game
  }

  create() {
    // Initialize the game field
    this.cameras.main.setBackgroundColor("#1f2937");
    this.add
      .rectangle(0, 0, this.scale.width, this.scale.height, 0x1f2937)
      .setOrigin(0, 0);

    // Initialize snake array (3 segments starting from the left side of the screen)
    const startX = this.gridSize * 4;
    const startY = this.gridSize * 10;

    this.snakeBody = [];
    for (let i = 0; i < 3; i++) {
      const segment = this.add.rectangle(
        startX - i * this.gridSize,
        startY,
        this.gridSize - 2,
        this.gridSize - 2,
        0x10b981
      );
      this.snakeBody.push(segment);
    }

    // Create food
    this.generateFood();

    // Set up controls
    this.cursors = this.input.keyboard!.createCursorKeys();

    // Pre-create WASD keys for better performance
    this.input.keyboard!.addKey("W");
    this.input.keyboard!.addKey("A");
    this.input.keyboard!.addKey("S");
    this.input.keyboard!.addKey("D");
    this.input.keyboard!.addKey("P");

    // Create score text
    this.scoreText = this.add.text(10, 10, "Score: 0", {
      fontSize: "18px",
      color: "#ffffff",
    });

    // Create status text
    this.statusText = this.add.text(10, 35, "Game Running", {
      fontSize: "14px",
      color: "#00ff00",
    });

    // Ensure the game canvas can receive focus for keyboard input
    if (this.sys.game.canvas) {
      this.sys.game.canvas.setAttribute("tabindex", "0");
      this.sys.game.canvas.style.outline = "none"; // Remove focus outline
      this.sys.game.canvas.style.border = "none";

      // Force focus immediately
      this.sys.game.canvas.focus();

      // Add multiple event listeners for better compatibility
      this.sys.game.canvas.addEventListener("click", () => {
        this.sys.game.canvas?.focus();
      });

      this.sys.game.canvas.addEventListener("mousedown", () => {
        this.sys.game.canvas?.focus();
      });
    }

    // Start the game loop
    const gameTimer = this.time.addEvent({
      delay: this.gameSpeed,
      callback: this.updateSnake,
      callbackScope: this,
      loop: true,
    });

    // Force first update after a short delay to ensure game starts
    this.time.delayedCall(100, () => {
      this.updateSnake();
    });
  }

  update() {
    if (this.gameOver) {
      // Check for restart
      if (this.input.keyboard!.checkDown(this.cursors.space!, 250)) {
        this.restartGame();
      }
      return;
    }

    // Check for pause
    if (this.input.keyboard!.checkDown(this.input.keyboard!.addKey("P"), 250)) {
      this.togglePause();
      return;
    }

    if (this.isPaused) return;

    // Handle input - using just isDown without checkDown for more responsive controls
    if (this.cursors.left.isDown) {
      if (this.direction !== "RIGHT") {
        this.newDirection = "LEFT";
      }
    } else if (this.cursors.right.isDown) {
      if (this.direction !== "LEFT") {
        this.newDirection = "RIGHT";
      }
    } else if (this.cursors.up.isDown) {
      if (this.direction !== "DOWN") {
        this.newDirection = "UP";
      }
    } else if (this.cursors.down.isDown) {
      if (this.direction !== "UP") {
        this.newDirection = "DOWN";
      }
    }

    // Check WASD keys separately
    const keyW = this.input.keyboard!.addKey("W");
    const keyA = this.input.keyboard!.addKey("A");
    const keyS = this.input.keyboard!.addKey("S");
    const keyD = this.input.keyboard!.addKey("D");

    if (keyA.isDown) {
      if (this.direction !== "RIGHT") {
        this.newDirection = "LEFT";
      }
    } else if (keyD.isDown) {
      if (this.direction !== "LEFT") {
        this.newDirection = "RIGHT";
      }
    } else if (keyW.isDown) {
      if (this.direction !== "DOWN") {
        this.newDirection = "UP";
      }
    } else if (keyS.isDown) {
      if (this.direction !== "UP") {
        this.newDirection = "DOWN";
      }
    }
  }

  updateSnake() {
    if (this.gameOver || this.isPaused) return;

    this.updateCount++;

    if (!this.gameStarted) {
      this.gameStarted = true;
      this.statusText.setText("Game Started!");
    }

    this.direction = this.newDirection;

    // Get head position
    const head = this.snakeBody[0];
    if (!head) {
      console.error("No snake head found!");
      return;
    }

    // Calculate new head position
    let newX = head.x;
    let newY = head.y;

    switch (this.direction) {
      case "LEFT":
        newX -= this.gridSize;
        break;
      case "RIGHT":
        newX += this.gridSize;
        break;
      case "UP":
        newY -= this.gridSize;
        break;
      case "DOWN":
        newY += this.gridSize;
        break;
    }

    // Check wall collision
    if (
      newX < 0 ||
      newX >= this.cameras.main.width ||
      newY < 0 ||
      newY >= this.cameras.main.height
    ) {
      this.endGame();
      return;
    }

    // Check self collision
    for (let i = 1; i < this.snakeBody.length; i++) {
      if (this.snakeBody[i].x === newX && this.snakeBody[i].y === newY) {
        this.endGame();
        return;
      }
    }

    // Check food collision
    if (newX === this.food.x && newY === this.food.y) {
      this.addNew = true;
      this.score += 10;
      this.scoreText.setText("Score: " + this.score);
      this.generateFood();
    }

    // Move snake
    if (!this.addNew) {
      // Remove tail
      const tail = this.snakeBody.pop();
      if (tail) {
        tail.destroy();
      }
    } else {
      this.addNew = false;
    }

    // Add new head
    const newHead = this.add.rectangle(
      newX,
      newY,
      this.gridSize - 2,
      this.gridSize - 2,
      0x10b981
    );
    this.snakeBody.unshift(newHead);
  }

  togglePause() {
    this.isPaused = !this.isPaused;

    if (this.isPaused) {
      this.pausedText = this.add
        .text(
          this.cameras.main.centerX,
          this.cameras.main.centerY,
          "PAUSED\nPress P to continue",
          {
            fontSize: "24px",
            color: "#ffff00",
            align: "center",
          }
        )
        .setOrigin(0.5);
    } else {
      if (this.pausedText) {
        this.pausedText.destroy();
      }
    }
  }

  generateFood() {
    const maxX = Math.floor(this.cameras.main.width / this.gridSize) - 1;
    const maxY = Math.floor(this.cameras.main.height / this.gridSize) - 1;

    let foodX: number, foodY: number;
    let validPosition = false;

    // Ensure food doesn't spawn on snake
    while (!validPosition) {
      foodX = Math.floor(Math.random() * maxX) * this.gridSize;
      foodY = Math.floor(Math.random() * maxY) * this.gridSize;

      validPosition = true;
      for (const segment of this.snakeBody) {
        if (segment.x === foodX && segment.y === foodY) {
          validPosition = false;
          break;
        }
      }
    }

    if (this.food) {
      this.food.destroy();
    }

    this.food = this.add.rectangle(
      foodX!,
      foodY!,
      this.gridSize - 2,
      this.gridSize - 2,
      0xff0000
    );
  }

  endGame() {
    this.gameOver = true;

    this.gameOverText = this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY - 50,
        "Game Over!",
        {
          fontSize: "32px",
          color: "#ff0000",
        }
      )
      .setOrigin(0.5);

    this.restartText = this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 20,
        "Press SPACE to restart",
        {
          fontSize: "18px",
          color: "#ffffff",
        }
      )
      .setOrigin(0.5);
  }

  restartGame() {
    // Reset game state
    this.gameOver = false;
    this.isPaused = false;
    this.gameStarted = false;
    this.direction = "RIGHT";
    this.newDirection = "RIGHT";
    this.addNew = false;
    this.score = 0;
    this.gameSpeed = 150;

    // Clear existing snake
    for (const segment of this.snakeBody) {
      segment.destroy();
    }
    this.snakeBody = [];

    // Clear existing game objects
    if (this.food) this.food.destroy();
    if (this.gameOverText) this.gameOverText.destroy();
    if (this.restartText) this.restartText.destroy();
    if (this.pausedText) this.pausedText.destroy();

    // Recreate snake
    const startX = this.gridSize * 4;
    const startY = this.gridSize * 10;

    for (let i = 0; i < 3; i++) {
      const segment = this.add.rectangle(
        startX - i * this.gridSize,
        startY,
        this.gridSize - 2,
        this.gridSize - 2,
        0x10b981
      );
      this.snakeBody.push(segment);
    }

    // Generate new food
    this.generateFood();

    // Update score text
    this.scoreText.setText("Score: 0");
  }
}

const SnakeGame: React.FC<SnakeGameProps> = ({
  width = 640,
  height = 480,
  className = "",
}) => {
  const gameRef = useRef<HTMLDivElement>(null);
  const phaserGameRef = useRef<Phaser.Game | null>(null);
  const currentScene = useRef<SnakeScene | null>(null);

  const handleClick = () => {
    if (phaserGameRef.current?.canvas) {
      phaserGameRef.current.canvas.focus();
      phaserGameRef.current.canvas.click();
    }
  };

  // Add React-level keyboard handling as fallback
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!currentScene.current) return;

      const scene = currentScene.current;

      switch (event.key.toLowerCase()) {
        case "arrowleft":
        case "a":
          if (scene.direction !== "RIGHT") {
            scene.newDirection = "LEFT";
          }
          event.preventDefault();
          break;
        case "arrowright":
        case "d":
          if (scene.direction !== "LEFT") {
            scene.newDirection = "RIGHT";
          }
          event.preventDefault();
          break;
        case "arrowup":
        case "w":
          if (scene.direction !== "DOWN") {
            scene.newDirection = "UP";
          }
          event.preventDefault();
          break;
        case "arrowdown":
        case "s":
          if (scene.direction !== "UP") {
            scene.newDirection = "DOWN";
          }
          event.preventDefault();
          break;
        case "p":
          scene.togglePause();
          event.preventDefault();
          break;
        case " ":
          if (scene.gameOver) {
            scene.restartGame();
          }
          event.preventDefault();
          break;
      }
    };

    // Add keyboard listener to document
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (gameRef.current && !phaserGameRef.current) {
      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width,
        height,
        parent: gameRef.current,
        backgroundColor: "#000000",
        scene: SnakeScene,
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        // Add fps config to ensure smooth running
        fps: {
          target: 60,
          forceSetTimeOut: true,
        },
      };

      try {
        phaserGameRef.current = new Phaser.Game(config);

        // Get reference to the scene for React keyboard handling
        setTimeout(() => {
          if (phaserGameRef.current?.scene) {
            currentScene.current = phaserGameRef.current.scene.getScene(
              "SnakeScene"
            ) as SnakeScene;
          }
        }, 100);

        // Auto-focus after a short delay
        setTimeout(() => {
          if (phaserGameRef.current?.canvas) {
            phaserGameRef.current.canvas.focus();
          }
        }, 500);
      } catch (error) {}
    }

    return () => {
      if (phaserGameRef.current) {
        phaserGameRef.current.destroy(true);
        phaserGameRef.current = null;
        currentScene.current = null;
      }
    };
  }, [width, height]);

  return (
    <div className={`w-full h-full flex flex-col ${className}`}>
      <div className="mb-2 text-center px-4">
        <h3 className="text-base font-semibold mb-1 text-white">Snake Game</h3>
        <p className="text-xs text-gray-300">
          Click to start • Arrow keys/WASD: Move • P: Pause • SPACE: Restart
        </p>
      </div>
      <div
        ref={gameRef}
        className="flex-1 flex items-center justify-center cursor-pointer"
        onClick={handleClick}
        tabIndex={0}
        style={{
          width: width,
          height: height - 50,
          margin: "0 auto",
          border: "1px solid #333", // Debug border
        }}
      />
    </div>
  );
};

export default SnakeGame;
