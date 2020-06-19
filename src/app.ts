/// <reference path="./models/drag-and-drop-interfaces.ts" />
/// <reference path="./models/project.ts" />
/// <reference path="./state/project-state-management.ts" />
/// <reference path="./utilities/validation.ts" />
/// <reference path="./decorators/autobind.ts" />
/// <reference path="./components/project-input.ts" />
/// <reference path="./components/project-list.ts" />

namespace app {
  // Component Base Class

  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
