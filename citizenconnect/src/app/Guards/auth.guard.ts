import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthstatusService } from "../Services/authstatus.service";

export const AuthGuard: CanActivateFn = (route, state) => {

    const router = inject(Router)
    const auth = inject(AuthstatusService)

    if (auth.isLoggedIn()) {

        return true
    } else {

        router.navigate(['/login'])
        
    }

    return true
}