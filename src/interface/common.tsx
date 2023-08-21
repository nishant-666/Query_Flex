interface commonInput {
  name: string;
  type?: string;
  placeholder: string;
  className?: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface authState {
  authState: { uid: string };
}
