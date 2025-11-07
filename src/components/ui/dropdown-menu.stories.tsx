import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuGroup,
} from './dropdown-menu';
import {
  RiMoreLine,
  RiEdit2Line,
  RiDeleteBin2Line,
  RiDownloadLine,
  RiShareLine,
  RiFileCopyLine,
  RiUserLine,
  RiSettings4Line,
  RiLogoutBoxLine,
  RiPaletteLine,
  RiMoonLine,
  RiSunLine,
} from '@remixicon/react';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/UI/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A dropdown menu component built with Radix UI primitives. Supports regular items, checkbox items, radio groups, separators, shortcuts, and nested submenus.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      description: 'The controlled open state of the dropdown',
      control: 'boolean',
    },
    defaultOpen: {
      description: 'The default open state (uncontrolled)',
      control: 'boolean',
    },
    onOpenChange: {
      description: 'Callback when the open state changes',
    },
  },
};

export default meta;
type Story = StoryObj<Meta<typeof DropdownMenu>>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Options
          <RiMoreLine className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={fn()}>
          <RiEdit2Line />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={fn()}>
          <RiFileCopyLine />
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem onClick={fn()}>
          <RiDownloadLine />
          Download
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={fn()}>
          <RiDeleteBin2Line />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic dropdown menu with regular items and a destructive action.',
      },
    },
  },
};

export const WithShortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          Actions
          <RiMoreLine className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem onClick={fn()}>
          <RiEdit2Line />
          Edit
          <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={fn()}>
          <RiFileCopyLine />
          Copy
          <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={fn()}>
          <RiShareLine />
          Share
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={fn()}>
          <RiDeleteBin2Line />
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu with keyboard shortcuts displayed.',
      },
    },
  },
};

const WithCheckboxesComponent = () => {
  const [checkedItems, setCheckedItems] = useState({
    statusBar: true,
    sidebar: false,
    minimap: true,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          View Options
          <RiMoreLine className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>Toggle UI Elements</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={checkedItems.statusBar}
          onCheckedChange={(checked) => setCheckedItems((prev) => ({ ...prev, statusBar: !!checked }))}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={checkedItems.sidebar}
          onCheckedChange={(checked) => setCheckedItems((prev) => ({ ...prev, sidebar: !!checked }))}
        >
          Sidebar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={checkedItems.minimap}
          onCheckedChange={(checked) => setCheckedItems((prev) => ({ ...prev, minimap: !!checked }))}
        >
          Minimap
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const WithCheckboxes: Story = {
  render: () => <WithCheckboxesComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu with checkbox items for toggling features.',
      },
    },
  },
};

const WithRadioGroupComponent = () => {
  const [theme, setTheme] = useState('system');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
          <RiPaletteLine className="w-4 h-4" />
          Theme
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light">
            <RiSunLine className="w-4 h-4" />
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            <RiMoonLine className="w-4 h-4" />
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const WithRadioGroup: Story = {
  render: () => <WithRadioGroupComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu with radio group for selecting theme options.',
      },
    },
  },
};

export const WithSubmenus: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          File Menu
          <RiMoreLine className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem onClick={fn()}>
          New File
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={fn()}>
          Open File
          <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Recent Files</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem onClick={fn()}>project-1.tsx</DropdownMenuItem>
            <DropdownMenuItem onClick={fn()}>components.tsx</DropdownMenuItem>
            <DropdownMenuItem onClick={fn()}>utils.ts</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={fn()}>Clear Recent</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Export As</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem onClick={fn()}>PDF</DropdownMenuItem>
            <DropdownMenuItem onClick={fn()}>HTML</DropdownMenuItem>
            <DropdownMenuItem onClick={fn()}>Markdown</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={fn()}>
          Save
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu with nested submenus for complex navigation.',
      },
    },
  },
};

export const UserProfileMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-3 px-3 py-2 rounded-full transition-colors">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            JD
          </div>
          <span className="text-sm font-medium">John Doe</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={fn()}>
            <RiUserLine />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={fn()}>
            <RiSettings4Line />
            Settings
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={fn()}>
          <RiLogoutBoxLine />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'User profile dropdown menu with account actions.',
      },
    },
  },
};

export const DisabledItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
          Document Actions
          <RiMoreLine className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem onClick={fn()}>
          <RiEdit2Line />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <RiShareLine />
          Share (Premium Only)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={fn()}>
          <RiDownloadLine />
          Download
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled variant="destructive">
          <RiDeleteBin2Line />
          Delete (No Permission)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu with some disabled items to show restricted actions.',
      },
    },
  },
};

const ControlledDropdownComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4 p-5">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Controlled Menu
            <RiMoreLine className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setOpen(false)}>Action 1</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(false)}>Action 2</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(false)}>Action 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex gap-2">
        <button
          onClick={() => setOpen(true)}
          className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition-colors"
        >
          Open Menu
        </button>
        <button
          onClick={() => setOpen(false)}
          className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition-colors"
        >
          Close Menu
        </button>
      </div>
      <p className="text-sm text-gray-600">Menu is currently: {open ? 'Open' : 'Closed'}</p>
    </div>
  );
};

export const ControlledDropdown: Story = {
  render: () => <ControlledDropdownComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Controlled dropdown menu with external state management.',
      },
    },
  },
};

export const LargeMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
          Large Menu
          <RiMoreLine className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 max-h-80 overflow-y-auto">
        <DropdownMenuLabel>Large Menu with Scrolling</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Array.from({ length: 20 }, (_, i) => (
          <DropdownMenuItem key={i} onClick={fn()}>
            Menu Item {i + 1}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Large dropdown menu with many items that requires scrolling.',
      },
    },
  },
};
