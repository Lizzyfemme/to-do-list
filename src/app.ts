/// <reference path="./components/project-input.ts" />
/// <reference path="./components/project-list.ts" />
namespace app {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
