if (typeof(SiebelAppFacade.CSContactsListAppletPR) === "undefined")
{
    SiebelJS.Namespace("SiebelAppFacade.CSContactsListAppletPR");
    define("siebel/custom/CSContactsListAppletPR", ["siebel/jqgridrenderer"], function()
    {
        SiebelAppFacade.CSContactsListAppletPR = (function()
        {

            function CSContactsListAppletPR(pm)
            {
                SiebelAppFacade.CSContactsListAppletPR.superclass.constructor.apply(this, arguments);
            }

            SiebelJS.Extend(CSContactsListAppletPR, SiebelAppFacade.JQGridRenderer);

            CSContactsListAppletPR.prototype.Init = function()
            {
                SiebelAppFacade.CSContactsListAppletPR.superclass.Init.apply(this, arguments);
				
            }
			
            CSContactsListAppletPR.prototype.ShowUI = function()
            {
                SiebelAppFacade.CSContactsListAppletPR.superclass.ShowUI.apply(this, arguments);
				var PM = this.GetPM();
				var GR = this.GetGrid();
				// Обозначаем апплет нашим классом
				var Applet = PM.Get("GetFullId");
				var SelApp = $("#"+Applet);
				SelApp.addClass("ToggleAppletOUI");
				// Обрабатываем контролы
				var controls = PM.Get("GetControls");
				for (controlKey in controls)
				{
					var NameControl = controls[controlKey].GetName();
					var htmlName = controls[controlKey].GetInputName();
					//console.log(NameControl);
					switch(NameControl)
					{
						case "RRToggle_Phones":
							var tg1 = $("[name='"+htmlName+"']");
							// Добавление класса
							tg1.addClass("button_toggle");
							// Нажатие
							tg1.click(function(){
								tg2.removeClass("button_toggle_disabled");
								tg1.attr("disabled","true");
								tg2.removeAttr("disabled");
								// колдуем с колонками при нажатии
								GR.jqGrid("showCol","Phone");
								GR.hideCol(["Street_Address","City","State","Country","Postal_Code","Type"]);
							});
						break;
						case "RRToggle_Adress":
							var tg2 = $("[name='"+htmlName+"']");
							// Добавление класса
							tg2.addClass("button_toggle_disabled");
							tg2.addClass("button_toggle");
							// Дисаблим кнопку
							//tg2.attr("disabled","true");
							// Нажатие
							tg2.click(function(){
								tg2.attr("disabled","true");
								tg1.removeAttr("disabled");
								// колдуем с колонками при нажатии
								GR.jqGrid("hideCol","Phone");
								GR.jqGrid("showCol",["Street_Address","City","State","Country","Postal_Code","Type"]);
							});
						break;
					}				
				}
				// Переносим на нашем апплете элементы в нужное место
				SelApp.find(".siebui-applet-title").append(tg1,tg2);
				SelApp.find("#pager_s_1_l_left").append(SelApp.find("span#s_1_rc"));
				GR.jqGrid("hideCol","Phone");
			}

            CSContactsListAppletPR.prototype.BindData = function(bRefresh)
            {
                SiebelAppFacade.CSContactsListAppletPR.superclass.BindData.apply(this, arguments);
            }

            CSContactsListAppletPR.prototype.BindEvents = function()
            {
                SiebelAppFacade.CSContactsListAppletPR.superclass.BindEvents.apply(this, arguments);
            }

            CSContactsListAppletPR.prototype.EndLife = function()
            {
                SiebelAppFacade.CSContactsListAppletPR.superclass.EndLife.apply(this, arguments);
            }

            return CSContactsListAppletPR;
        }());
        return "SiebelAppFacade.CSContactsListAppletPR";
    })
}