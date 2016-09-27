using System;
using System.Web.UI;
using System.Data;
using Oracle.DataAccess.Client;

namespace ChambersApp
{
    public partial class _Default : Page
    {
        static OracleConnection Chamber_Oracle = null;

        protected void Page_Load(object sender, EventArgs e)
        {
            OracleOpenConnection();
            LoadAllChambers();
        }

        /***************************************************
        *   Queries the V_Devices view (run on page load)
        *   and loops through all 29 Location IDs, placing
        *   them into the correct label on the web page
        *
        ***************************************************/
        protected void LoadAllChambers()
        {
            DataTable dtDevices = new DataTable();
            string[] DeviceByLocation = new string[30];

            for (int i = 1; i <= 29; i++)
            {
                string DeviceQuery = "SELECT * FROM User.V_Devices where \"Device Location ID\" = " + i;
                dtDevices = OracleDb.GetDataTable(DeviceQuery);

                foreach (DataRow device in dtDevices.Rows)
                {
                    DeviceByLocation[i] += (string)device["Device"]+"<br>";
                }//end foreach
            }//end for
            
            //Insert Device names into the "Labels"
            Label1.Text = DeviceByLocation[1];
            Label11.Text = DeviceByLocation[11];
            Label13.Text = DeviceByLocation[13];
            //Label16.Text = DeviceByLocation[16];
            //Label17.Text = DeviceByLocation[17];
            Label18.Text = DeviceByLocation[18];
            Label19.Text = DeviceByLocation[19];
            Label25.Text = DeviceByLocation[25];
            
        }

        public static void OracleOpenConnection()
        {
            if (Chamber_Oracle == null)
            {
                string conn = "Data Source=qlt11g;User ID=*****;password=*****"; // replace later with Chamber credentials (not yet created)
                Chamber_Oracle = new OracleConnection(conn);
                Chamber_Oracle.Open();
            }
        }
        }
}
