interface commonInput {
  name: string;
  type?: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
