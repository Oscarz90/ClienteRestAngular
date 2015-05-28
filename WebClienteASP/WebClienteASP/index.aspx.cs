using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;
using ServiceStack.ServiceClient.Web;
using UNO.ServiciosCorredores.Entidades;
using Public.Services.Autos.MessageContracts;


namespace WebClienteASP
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        /// <summary>
        /// Obtencion de
        /// </summary>
        [System.Web.Services.WebMethod(EnableSession = false)]
        public static string ObtenerTipoVehiculo()
        {
            try
            {
                AuthClass autenticacion = new AuthClass() { User="001892", Password="Pa55word"};
                ObtenerTiposVehiculoRequest tipoVehiculoReq = new ObtenerTiposVehiculoRequest() { usuario="001892"};
                //var cliente = new JsonServiceClient(ConfigurationManager.AppSettings["PublicServicesRest"]);
                var cliente = new JsonServiceClient("http://servicesrest.testing.hdi.net:8000/Autos/");
            

                //var respuesta = cliente<ObtenerTiposVehiculoResponse>(new ObtenerTiposVehiculoRestRequest ()
                var respuesta = cliente.Post<ObtenerTiposVehiculoResponse>("/TiposVehiculo", new ObtenerTiposVehiculoRestRequest()
                {
                    Autenticacion= autenticacion,
                    Request=tipoVehiculoReq

                });

                JavaScriptSerializer serializer = new JavaScriptSerializer();
                string retorno = serializer.Serialize(respuesta);

                cliente.Dispose();

                return retorno;
            }
            catch (Exception e)
            {
                JavaScriptSerializer serializer = new JavaScriptSerializer();
                string retorno = serializer.Serialize(e);
                return retorno;
            }
            finally
            {

            }
        }

    }
}