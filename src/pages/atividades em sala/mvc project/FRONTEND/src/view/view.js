import { formNewUser } from "./form-component.js";
import { resultView } from "./table-component.js";

const view = {
    render:()=>{
        formNewUser.build();
        table58.build();
    },

    update:(users, user)=>{        
        resultView.update(user);
        formNewUser.update(users);
    },
updateForm:(user)=>{
    formNewUser.update(user)
}

}

export {view}