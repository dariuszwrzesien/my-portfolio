import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const meta: Meta<typeof Dialog> = {
  title: "Components/UI/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A modal dialog component built with Radix UI primitives. Supports accessibility features, backdrop clicks, and keyboard navigation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      description: "The controlled open state of the dialog",
      control: "boolean",
    },
    defaultOpen: {
      description: "The default open state (uncontrolled)",
      control: "boolean",
    },
    onOpenChange: {
      description: "Callback when the open state changes",
    },
  },
};

export default meta;
type Story = StoryObj<Meta<typeof Dialog>>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Open Dialog
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a basic dialog with a title and description.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>
            Dialog content goes here. You can put any content inside the dialog.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic dialog with title, description, and content.",
      },
    },
  },
};

export const WithFooter: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Open Dialog with Footer
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>
            Are you sure you want to continue? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>This dialog includes footer actions for confirmation.</p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <button className="px-4 py-2 text-gray-100 hover:text-gray-400 transition-colors">
              Cancel
            </button>
          </DialogClose>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            Confirm
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dialog with footer containing action buttons.",
      },
    },
  },
};

export const ControlledDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="space-y-4 p-5">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Open Controlled Dialog
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Controlled Dialog</DialogTitle>
              <DialogDescription>
                This dialog's open state is controlled by external state.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p>You can control this dialog programmatically.</p>
            </div>
            <DialogFooter>
              <button
                onClick={() => setOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close Programmatically
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="flex gap-2">
          <button
            onClick={() => setOpen(true)}
            className="bg-gray-600 text-white px-3 py-1 text-sm rounded hover:bg-gray-700 transition-colors"
          >
            Open via Button
          </button>
          <button
            onClick={() => setOpen(false)}
            className="bg-gray-600 text-white px-3 py-1 text-sm rounded hover:bg-gray-700 transition-colors"
          >
            Close via Button
          </button>
        </div>
        <p className="text-sm text-gray-600">
          Dialog is currently: {open ? "Open" : "Closed"}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Controlled dialog with external state management and programmatic control.",
      },
    },
  },
};

export const FormDialog: Story = {
  render: () => {
    const [formData, setFormData] = useState({ name: "", email: "" });

    return (
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Add Contact
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Contact</DialogTitle>
            <DialogDescription>
              Fill in the details to add a new contact to your list.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Enter email"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
                Cancel
              </button>
            </DialogClose>
            <DialogClose asChild>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => {
                  alert(`Added: ${formData.name} (${formData.email})`);
                  setFormData({ name: "", email: "" });
                }}
              >
                Add Contact
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Dialog containing a form for adding new contacts.",
      },
    },
  },
};

export const LargeContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
          Open Large Dialog
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Large Content Dialog</DialogTitle>
          <DialogDescription>
            This dialog contains a large amount of content with scrolling.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold mb-2">Section {i + 1}</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Close
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dialog with large content that requires scrolling.",
      },
    },
  },
};

export const NoCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
          Open Dialog (No X)
        </button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Important Notice</DialogTitle>
          <DialogDescription>
            This dialog requires explicit action to close.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>
            The close button (X) has been hidden. You must use the footer
            buttons to close.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Acknowledge
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Dialog with the close button (X) hidden, requiring explicit action.",
      },
    },
  },
};
