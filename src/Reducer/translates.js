import spanishMessages from '../languages/es'

 let i18nConfig = {
    locale: spanishMessages.locale,
    messages: spanishMessages.messages
};

export default function(state=i18nConfig,action={}){
        switch (action.type) {
            default: 
            return state
        }
    }
