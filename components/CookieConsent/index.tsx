import { useEffect } from "react";

const contactUs = "info@a-group.cz"

declare global {
  interface Window {
    initCookieConsent: any;
  }
}

export default function CookieConsent() {
    useEffect(() => {
      if(window !== undefined && typeof window.initCookieConsent === 'function') {
        const cc = window.initCookieConsent();

        cc.run({
          autorun: true,
          current_lang: 'cs',
          theme_css: 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.css',
          autoclear_cookies: true,
          page_scripts: true,

          gui_options: {
            consent_modal: {
                layout: 'cloud',               // box/cloud/bar
                position: 'bottom center',     // bottom/middle/top + left/right/center
                transition: 'slide',           // zoom/slide
                swap_buttons: false            // enable to invert buttons
            },
            // settings_modal: {
            //     layout: 'box',                 // box/bar
            //     // position: 'left',           // left/right
            //     transition: 'slide'            // zoom/slide
            // }
          },
      
          // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
          // delay: 0,                               // default: 0
          auto_language: 'document',                     // default: null; could also be 'browser' or 'document'
          // autorun: true,                          // default: true
          // force_consent: false,                   // default: false
          // hide_from_bots: false,                  // default: false
          // remove_cookie_tables: false             // default: false
          // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
          // cookie_expiration: 182,                 // default: 182 (days)
          // cookie_necessary_only_expiration: 182   // default: disabled
          // cookie_domain: location.hostname,       // default: current domain
          // cookie_path: '/',                       // default: root
          // cookie_same_site: 'Lax',                // default: 'Lax'
          // use_rfc_cookie: false,                  // default: false
          // revision: 0,                            // default: 0
      
          // onFirstAction: function(user_preferences, cookie){
          //     // callback triggered only once
          // },
      
          // onAccept: function (cookie) {
          //     // ...
          // },
      
          // onChange: function (cookie, changed_preferences) {
          //     // ...
          // },
      
          languages: {
            'cs': {
                consent_modal: {
                    title: 'Aby web spr??vn?? fungoval pou????v??me cookies',
                    description: 'Cookies pou????v??me ke zlep??en?? prohl????en?? webu a poskytov??n?? dal????ch funkc??. Souhlas ud??l??te kliknut??m na tla????tko "Povolit v??e" nebo ho m????ete odm??tnout <button type="button" data-cc="accept-necessary" class="cc-link">zde</button>.',
                    primary_btn: {
                        text: 'Povolit v??e',
                        role: 'accept_all'              // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Nastavit preference',
                        role: 'settings'        // 'settings' or 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: 'Nastaven?? cookies',
                    save_settings_btn: 'Souhlas??m s vybran??mi cookies',
                    accept_all_btn: 'Souhlas??m se v??emi cookies',
                    reject_all_btn: false,
                    close_btn_label: 'Zav????t',
                    blocks: [
                        {
                            description: 'Upravte si cookies dle vlastn??ch preferenc??.'
                        }, {
                            title: 'Technick?? cookies',
                            description: 'Tyto cookies jsou nezbytn?? pro spr??vn?? a bezpe??n?? fungov??n?? webu. Technick?? cookies nelze vypnout.',
                            toggle: {
                                value: 'necessary',
                                enabled: true,
                                readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                            }
                        }, {
                            title: 'Analytick?? cookies',
                            description: 'Analytick?? cookies umo????uj?? m????en?? v??konu webu. Jejich pomoc?? ur??ujeme t??eba po??et a zdroje n??v??t??v. Z??skan?? data jsou samoz??ejm?? anonymn??.',
                            toggle: {
                                value: 'analytics',     // your cookie category
                                enabled: false,
                                readonly: false
                            }
                        }, {
                            title: 'Reklamn?? cookies',
                            description: 'Tyto soubory cookies shroma????uj?? informace o tom, jak webov?? str??nky pou????v??te, kter?? str??nky jste nav??t??vili a na kter?? odkazy jste klikli. Souhlas s t??mito cookies lze kdykoliv odvolat.',
                            toggle: {
                                value: 'targeting',
                                enabled: false,
                                readonly: false
                            }
                        }, {
                            title: 'Dal???? informace',
                            description: `V p????pad?? dal????ch dotaz?? ohledn?? podm??nek a nastaven??, nev??hejte a <a class="cc-link" href="mailto:${contactUs}">kontaktujte n??s</a>.`,
                        }
                    ]
                }
            },
            'de': {
                consent_modal: {
                    title: 'Wir verwenden Cookies, damit die Website ordnungsgem???? funktioniert',
                    description: 'Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern und zus??tzliche Funktionen bereitzustellen. Sie k??nnen Ihre Zustimmung geben, indem Sie auf die Schaltfl??che "Alle zulassen" klicken, oder Sie k??nnen sie <button type="button" data-cc="accept-necessary" class="cc-link">hier</button> verweigern.',
                    primary_btn: {
                        text: 'Erlaubt alle',
                        role: 'accept_all'              // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Einstellungen festlegen',
                        role: 'settings'        // 'settings' or 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: 'Nastaven?? cookies',
                    save_settings_btn: 'Ich akzeptiere alle Cookies',
                    accept_all_btn: 'Ich akzeptiere ausgew??hlte Cookies',
                    reject_all_btn: false,
                    close_btn_label: 'Zav????t',
                    blocks: [
                        {
                            description: 'Passen Sie die Kekse nach Ihren eigenen Vorlieben an.'
                        }, {
                            title: 'Technische Cookies',
                            description: 'Diese Cookies sind f??r das korrekte und sichere Funktionieren der Website unerl??sslich. Technische Cookies k??nnen nicht deaktiviert werden.',
                            toggle: {
                                value: 'necessary',
                                enabled: true,
                                readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                            }
                        }, {
                            title: 'Analytische Cookies',
                            description: 'Analytische Cookies erm??glichen es, die Leistung der Website zu messen. Wir verwenden sie, um zum Beispiel die Anzahl und die Quellen der Besuche zu ermitteln. Die erhobenen Daten sind selbstverst??ndlich anonym.',
                            toggle: {
                                value: 'analytics',     // your cookie category
                                enabled: false,
                                readonly: false
                            }
                        }, {
                            title: 'Werbe-Cookies',
                            description: 'Diese Cookies sammeln Informationen dar??ber, wie Sie die Website nutzen, welche Seiten Sie besucht haben und welche Links Sie angeklickt haben. Sie k??nnen Ihre Zustimmung zu diesen Cookies jederzeit widerrufen.',
                            toggle: {
                                value: 'targeting',
                                enabled: false,
                                readonly: false
                            }
                        }, {
                            title: 'Weitere Informationen',
                            description: `Wenn Sie weitere Fragen zu den Bedingungen und Einstellungen haben, z??gern Sie bitte nicht, <a class="cc-link" href="mailto:${contactUs}">uns zu kontaktieren</a>.`,
                        }
                    ]
                }
            }
          }
      });
      }
      

    }, []);

    return null;
}