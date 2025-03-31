import type { TreeItem } from "@nuxt/ui";
import type { ContentNavigationItem } from "@nuxt/content";
import type { Router } from "vue-router";
import type { TocLink } from "@nuxt/content";

function selectNaviNode(
  naviItem: ContentNavigationItem[] | null,
  path: string
): ContentNavigationItem | undefined {
  if (naviItem) {
    for (var nav of naviItem) {
      if (nav.path == path) {
        console.log("nav : " + nav.path);
        return nav;
      } else {
        if (nav.children) {
          for (var child of nav.children) {
            if (child.path == path) {
              console.log("child : " + child.path);
              return child;
            }
          }
        }
      }
    }
  }
}
function convertNaviToTreeItem(
  naviItem: ContentNavigationItem,
  index: number,
  router: Router
): TreeItem {
  return {
    label: naviItem.title,
    value: naviItem.path,
    icon: naviItem.children ? "" : "i-vscode-icons-file-type-markdown",
    defaultExpanded: index == 0 ? true : false,
    children: naviItem.children?.map((sub) =>
      convertNaviToTreeItem(sub, 1, router)
    ),
    onToggle: (e: Event) => {},
    // to: naviItem.path,
    onSelect: (e: Event) => {
      console.log("treenode" + naviItem.path + ":" + e);
      // router.push(naviItem.path.replace(regexp, "/"));
      router.push(naviItem.path);
    },
  };
}

function convertTocLinkToTreeItem(
  route: string,
  toclink: TocLink,
  index: number
): TreeItem {
  const router = useRouter();
  return {
    label: toclink.text,
    value: route + "#" + toclink.id,
    defaultExpanded: true,
    // icon: "i-tabler-square-rounded-plus",
    // icon: "i-tabler-square-chevron-right",
    children: toclink.children?.map((sub) =>
      convertTocLinkToTreeItem(route, sub, 1)
    ),
    onSelect: (e: Event) => {
      router.push(route + "#" + toclink.id);
    },
  };
}

export { convertNaviToTreeItem, convertTocLinkToTreeItem, selectNaviNode };
