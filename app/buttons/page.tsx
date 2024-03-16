import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button size="default" variant="default">
        Click me
      </Button>
      <Button size="default" variant="primary">
        Primary
      </Button>
      <Button size="default" variant="primaryOutline">
        Primary Outline
      </Button>
      <Button size="default" variant="secondary">
        Secondary
      </Button>
      <Button size="default" variant="secondaryOutline">
        Secondary Outline
      </Button>
      <Button size="default" variant="danger">
        Danger
      </Button>
      <Button size="default" variant="dangerOutline">
        Danger Outline
      </Button>
      <Button size="default" variant="super">
        Super
      </Button>
      <Button size="default" variant="superOutline">
        Super Outline
      </Button>
      <Button size="default" variant="ghost">
        Ghost
      </Button>
      <Button size="default" variant="sidebar">
        Sidebar
      </Button>
      <Button size="default" variant="sidebarOutline">
        Sidebar Outline
      </Button>
    </div>
  );
}
