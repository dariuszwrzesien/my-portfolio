import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import MobileExplorerBar from './MobileExplorerBar';

const meta: Meta<typeof MobileExplorerBar> = {
  title: 'Components/MobileExplorerBar',
  component: MobileExplorerBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A collapsible, IDE-explorer-like bar that replaces the left sidebar on mobile. Clicking the bar toggles a dropdown panel; clicking outside or pressing Escape closes it.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Meta<typeof MobileExplorerBar>>;

const Template = ({ initialOpen = false, summary }: { initialOpen?: boolean; summary?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  return (
    <div className="w-80 h-64">
      <MobileExplorerBar title="personal-info" summary={summary} isOpen={isOpen} onOpenChange={setIsOpen}>
        <ul className="flex flex-col gap-2 p-4">
          <li>bio</li>
          <li>employment</li>
          <li>educations</li>
        </ul>
      </MobileExplorerBar>
    </div>
  );
};

export const Collapsed: Story = {
  render: () => <Template />,
};

export const Expanded: Story = {
  render: () => <Template initialOpen />,
  parameters: {
    docs: {
      description: {
        story: 'Shows the bar with the dropdown panel expanded.',
      },
    },
  },
};

export const WithSummary: Story = {
  render: () => <Template summary={<span className="text-sm text-foreground">(2)</span>} />,
  parameters: {
    docs: {
      description: {
        story: 'Shows the bar with additional summary content aligned to the right.',
      },
    },
  },
};
