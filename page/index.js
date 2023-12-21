const elementMaker = (tag, parents, props = {}) => {
  const element = document.createElement(tag);
  Object.assign(element, props);
  parents.appendChild(element);
  return element;
};

const formProps = {
  method: "post",
  action: "/edit",
};

const formTag = elementMaker("form", document.body, formProps);

const inputProps = {
  type: "text",
  name: "msg",
};

elementMaker("input", formTag, inputProps);

const submitProps = {
  type: "submit",
};

elementMaker("input", formTag, submitProps);
