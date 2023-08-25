interface commonInput {
  name: string;
  type?: string;
  placeholder: string;
  className?: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Drawer {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Function;
  children: React.ReactNode;
}

interface authState {
  authState: { uid: string };
}
