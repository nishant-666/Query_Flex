interface ResponseText {
  text: string;
}

interface QueryHistory {
  setCurrentDoc: Function;
  getCurrentDoc: Function;
}

interface LandingComponent {
  currentDoc: never[];
}
