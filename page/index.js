// element 생성용 함수
const elementMaker = (tag, parents, props = {}) => {
  const element = document.createElement(tag);
  Object.assign(element, props);
  parents.appendChild(element);
  return element;
};

const collectionInputProps = {
  type: "text",
  name: "collection",
};

const docInputProps = {
  type: "text",
  name: "doc",
};

const fieldInputProps = {
  type: "text",
  name: "field",
};

const valueInputProps = {
  type: "text",
  name: "value",
};

const mergeInputProps = {
  type: "checkbox",
  name: "merge",
};

// 전송
const submitProps = {
  type: "submit",
};

// DB 추가/업데이트용 form
const addFormProps = {
  method: "post",
  action: "/add",
};

const addFormTag = elementMaker("form", document.body, addFormProps);

elementMaker("input", addFormTag, collectionInputProps);
elementMaker("input", addFormTag, docInputProps);
elementMaker("input", addFormTag, fieldInputProps);
elementMaker("input", addFormTag, valueInputProps);
elementMaker("input", addFormTag, mergeInputProps);
elementMaker("input", addFormTag, submitProps);

// DB 조회용 form
const readFormProps = {
  method: "post",
  action: "/read",
};

const readFormTag = elementMaker("form", document.body, readFormProps);

elementMaker("input", readFormTag, collectionInputProps);
elementMaker("input", readFormTag, docInputProps);
elementMaker("input", readFormTag, fieldInputProps);
elementMaker("input", readFormTag, valueInputProps);
elementMaker("input", readFormTag, submitProps);
