import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { AddResponse, Views } from "../../Models/views";

export const viewsActions = createActionGroup({

    source:'VIEWS API',
    events:{

        'add': props<{views: Views}>(),
        'add success': props<{response: AddResponse}>(),
        'add failure': props<{message: string}>(),

        'get views': emptyProps(),
        'get views success': props<{views: Views[]}>(),
        'get views failure': props<{message: string}>(),

        'get view': props<{viewsId: string}>(),

    }
    

})