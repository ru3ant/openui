if (typeof(SiebelAppFacade.LSClinicalProtocolSiteContractListAppletPR) === "undefined")
{
    SiebelJS.Namespace("SiebelAppFacade.LSClinicalProtocolSiteContractListAppletPR");
    define("siebel/custom/LSClinicalProtocolSiteContractListAppletPR", ["siebel/jqgridrenderer"], function()
    {
        SiebelAppFacade.LSClinicalProtocolSiteContractListAppletPR = (function()
        {

            var tg2;
			function LSClinicalProtocolSiteContractListAppletPR(pm)
            {
                SiebelAppFacade.LSClinicalProtocolSiteContractListAppletPR.superclass.constructor.apply(this, arguments);
            }

            SiebelJS.Extend(LSClinicalProtocolSiteContractListAppletPR, SiebelAppFacade.JQGridRenderer);

            LSClinicalProtocolSiteContractListAppletPR.prototype.Init = function()
            {
                SiebelAppFacade.LSClinicalProtocolSiteContractListAppletPR.superclass.Init.apply(this, arguments);
				
            }

            LSClinicalProtocolSiteContractListAppletPR.prototype.ShowUI = function()
            {
                SiebelAppFacade.LSClinicalProtocolSiteContractListAppletPR.superclass.ShowUI.apply(this, arguments);
				var PM = this.GetPM();
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
						case "RRToggle_Active":
							var tg1 = $("[name='"+htmlName+"']");
							// Добавление класса
							tg1.addClass("button_toggle");
							// Нажатие
							tg1.click(function(){
								tg1.attr("disabled","true");
								tg2.removeAttr("disabled");
								PM.ExecuteMethod("InvokeMethod", "RRToggle_Active");
							});
						break;
						case "RRToggle_All":
							var tg2 = $("[name='"+htmlName+"']");
							// Добавление класса
							tg2.addClass("button_toggle");
							// Дисаблим кнопку
							tg2.attr("disabled","true");
							// Нажатие
							tg2.click(function(){
								tg1.removeAttr("disabled");
								tg2.attr("disabled","true");
								PM.ExecuteMethod("InvokeMethod", "RRToggle_All");
							});							
						break;
					}
				}
				// Переносим на нашем апплете элементы в нужное место
				SelApp.find(".siebui-applet-title").append(tg1,tg2);
				SelApp.find("#pager_s_1_l_left").append(SelApp.find("span#s_1_rc"));
			}

            LSClinicalProtocolSiteContractListAppletPR.prototype.BindData = function(bRefresh)
            {
                SiebelAppFacade.LSClinicalProtocolSiteContractListAppletPR.superclass.BindData.apply(this, arguments);
            }

            LSClinicalProtocolSiteContractListAppletPR.prototype.BindEvents = function()
            {
                SiebelAppFacade.LSClinicalProtocolSiteContractListAppletPR.superclass.BindEvents.apply(this, arguments);
            }

            LSClinicalProtocolSiteContractListAppletPR.prototype.EndLife = function()
            {
                SiebelAppFacade.LSClinicalProtocolSiteContractListAppletPR.superclass.EndLife.apply(this, arguments);
            }

            return LSClinicalProtocolSiteContractListAppletPR;
        }());
        return "SiebelAppFacade.LSClinicalProtocolSiteContractListAppletPR";
    })
}