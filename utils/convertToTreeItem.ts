import type { TreeItem } from "@nuxt/ui";
import type { ContentNavigationItem } from "@nuxt/content";
import type { Router } from "vue-router";

function convertNaviToTreeItem(
  naviItem: ContentNavigationItem,
  index: number,
  router: Router
): TreeItem {
  // const regexp = new RegExp(`(${naviItem.stem})/`, "gi");

  return {
    // label: naviItem.stem?.split("/").pop()?.split(".").splice(1).join("."),
    // naviItem.title == ""
    //   ? naviItem.stem?.split("/").pop()?.split(".").join(".")
    //   : naviItem.title,
    // label: naviItem.title,
    // value: naviItem.path.replace(regexp, "/"),
    label: naviItem.title,
    value: naviItem.path,
    icon: naviItem.children ? "" : "i-vscode-icons-file-type-markdown",
    defaultExpanded: index == 0 ? true : false,
    children: naviItem.children?.map((sub) =>
      convertNaviToTreeItem(sub, 1, router)
    ),
    onSelect: (e: Event) => {
      // router.push(naviItem.path.replace(regexp, "/"));
      router.push(naviItem.path);
    },
  };
}

export { convertNaviToTreeItem };
