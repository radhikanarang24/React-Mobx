import React from "react";
import ReactDOM from "react-dom";

import { observable, computed } from "mobx";
import { observer } from "mobx-react";

class Person {
  // observable state:
  @observable firstName = "Michel";
  @observable lastName = "Weststrate";
  @observable nickName;

  // computed values:
  @computed get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

// reaction: React component that observers state
const profileView = observer(props => {
  if (props.person.nickName) return <div>{props.person.nickName}</div>;
  else return <div>{props.person.fullName}</div>;
});

// actions:
const michel = new Person();
ReactDOM.render(
  React.createElement(profileView, { person: michel }),
  document.body
);

setTimeout(() => (michel.nickName = "mweststrate"), 5000);
