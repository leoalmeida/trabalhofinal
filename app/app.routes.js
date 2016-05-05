System.register(['./components/home.component', "./components/imagens.component", "./components/forms.component", "./components/links.component", "./models/item.model", "./components/info.component", "./components/table.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_component_1, imagens_component_1, forms_component_1, links_component_1, item_model_1, info_component_1, table_component_1;
    var APP_ROUTES, MENU_ITEMS, IMAGE_ITEMS;
    return {
        setters:[
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (imagens_component_1_1) {
                imagens_component_1 = imagens_component_1_1;
            },
            function (forms_component_1_1) {
                forms_component_1 = forms_component_1_1;
            },
            function (links_component_1_1) {
                links_component_1 = links_component_1_1;
            },
            function (item_model_1_1) {
                item_model_1 = item_model_1_1;
            },
            function (info_component_1_1) {
                info_component_1 = info_component_1_1;
            },
            function (table_component_1_1) {
                table_component_1 = table_component_1_1;
            }],
        execute: function() {
            exports_1("APP_ROUTES", APP_ROUTES = [
                { path: '/home', name: 'Home', component: home_component_1.HomeComponent },
                { path: '/forms', name: 'Forms', component: forms_component_1.FormsComponent },
                { path: '/imagens', name: 'Imagens', component: imagens_component_1.ImagensComponent },
                { path: '/table', name: 'Table', component: table_component_1.TableComponent },
                { path: '/info', name: 'Info', component: info_component_1.InfoComponent },
                { path: '/links', name: 'Links', component: links_component_1.LinksComponent },
            ]);
            exports_1("MENU_ITEMS", MENU_ITEMS = [
                new item_model_1.ItemDefinition("Images", "/assets/imagens/Beach-96.png", "./Imagens", ""),
                new item_model_1.ItemDefinition("Forms", "/assets/imagens/Form-96.png", "./Forms", ""),
                new item_model_1.ItemDefinition("Table", "/assets/imagens/Grid-96.png", "./Table", ""),
                new item_model_1.ItemDefinition("Info", "/assets/imagens/About-96.png", "./Info", ""),
                new item_model_1.ItemDefinition("Github", "/assets/imagens/Github2-96.png", "./Links", "https://github.com/leoalmeida/trabalhofinal"),
                new item_model_1.ItemDefinition("CSS", "/assets/imagens/CSS3-96.png", "./Links", "https://cssanimation.rocks/pt/"),
                new item_model_1.ItemDefinition("HBO Go", "/assets/imagens/HBOGo-96.png", "./Links", "http://www.hbogo.com.br/"),
                new item_model_1.ItemDefinition("WhatsApp", "/assets/imagens/WhatsApp-96.png", "./Links", "https://web.whatsapp.com/"),
                new item_model_1.ItemDefinition("Facebook", "/assets/imagens/Facebook-96.png", "./Links", "http://www.facebook.com"),
                new item_model_1.ItemDefinition("Chrome", "/assets/imagens/Chrome-96.png", "./Links", "https://www.google.com/chrome/")
            ]);
            exports_1("IMAGE_ITEMS", IMAGE_ITEMS = [
                new item_model_1.ItemDefinition("Img1", "/assets/imgHD/apple-logo-white.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img2", "/assets/imgHD/amsterdam.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img3", "/assets/imgHD/applecrash.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img4", "/assets/imgHD/bandg.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img5", "/assets/imgHD/black_leather.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img6", "/assets/imgHD/Cavalo-selvagem-no-Mar.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img7", "/assets/imgHD/crissxcross.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img8", "/assets/imgHD/fundos-de-tela-fundos.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img9", "/assets/imgHD/Mar-Papel-de-Parede.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img10", "/assets/imgHD/Imagem-do-Mar.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img11", "/assets/imgHD/Mar.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img12", "/assets/imgHD/Megulho-no-Mar.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img13", "/assets/imgHD/Paisagem-do-Mar.jpeg", "./Imagens"),
                new item_model_1.ItemDefinition("Img14", "/assets/imgHD/Papel-de-Parede-do-Mar.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img15", "/assets/imgHD/Papel-de-Parede-Mar-Aberto.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img16", "/assets/imgHD/Por-do-sol-no-Mar.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img17", "/assets/imgHD/thinkdifferent.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img18", "/assets/imgHD/Wallpaper-do-Mar.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img19", "/assets/imgHD/wallpapers-hd-Papel-de-Parede.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img20", "/assets/imgHD/water-apple.jpg", "./Imagens"),
                new item_model_1.ItemDefinition("Img20", "/assets/imgHD/wwdc2012.jpg", "./Imagens")
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map