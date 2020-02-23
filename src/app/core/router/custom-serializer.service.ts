import { RouterStateUrl } from "./router.state";
import { RouterStateSerializer } from "@ngrx/router-store";

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(
    routerState: import("@angular/router").RouterStateSnapshot
  ): RouterStateUrl {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const {
      url,
      root: { queryParams }
    } = routerState;
    const { params } = route;
    return { url, params, queryParams };
  }
}
