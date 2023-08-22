interface ResponseText {
  text: string;
}

interface QueryHistory {
  setCurrentDoc: Function;
  getCurrentDoc: Function;
  setIsEdit: Function;
  setCurrentId: Function;
}

interface LandingComponent {
  currentDoc: never[];
  isEdit: boolean;
  currentId: string;
}
