<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ChamberApp.aspx.cs" Inherits="ChambersApp._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <div class="jumbotron">
        <h1>Chambers</h1>
    </div>
    <label>1-Lower</label>
    <div style="height:1000px; width:1000px; border: solid; position:relative;">
        <div style="height: 200px; width: 400px; border: solid; position:absolute; top:10px; left:10px; overflow-x:scroll">
            <strong>27 LL</strong><br />
            <asp:Label runat="server" ID="Label19"></asp:Label>
        </div>
        <div style="height: 200px; width: 300px; border: solid; position:absolute; top:230px; left:10px; overflow-x:scroll">
            <strong>24 HH</strong><br />
            <asp:Label runat="server" ID="Label18"></asp:Label>
        </div>
        <div style="height: 200px; width: 200px; border: solid; position:absolute; top:450px; left:10px; overflow-x:scroll">
            <strong>13 LL</strong><br />
            <asp:Label runat="server" ID="Label13"></asp:Label>
        </div>
        <div style="width: 200px; border: solid; position:absolute; top:670px; left:10px; overflow-x:scroll">
            <strong>9 HH</strong><br />
            <asp:Label runat="server" ID="Label11"></asp:Label>
        </div>
        <div style="height: 600px; width: 400px; border: solid; position:absolute; top:230px; right:10px; overflow-x:scroll">
            <strong>NN</strong><br />
            <asp:Label runat="server" ID="Label25"></asp:Label>
        </div>
        
        <div style="height:400px; border: solid; position:absolute; top:230px; left:350px; overflow-x:scroll">
            <strong>BB</strong><br />
            <asp:Label runat="server" ID="Label1"></asp:Label>
        </div>
    </div>
    
    <br />

<%--    For future expansion

    <label>5-Upper</label>
    <div class="row">
        <div class="col-lg-2" style="height: 200px; width: 200px; border: solid; margin:1%">19 LL</div>
        <div class="col-lg-2" style="height: 200px; width: 200px; border: solid; margin: 1%">20 HH</div>
        <div class="col-lg-2" style="height: 200px; width: 200px; border: solid; margin: 1%">BB</div>
    </div>
    <div class="row">
        <div class="col-lg-2"><asp:Label runat="server" ID="Label16"></asp:Label></div>
        <div class="col-lg-2"><asp:Label runat="server" ID="Label17"></asp:Label></div>
        <div class="col-lg-2"><asp:Label runat="server" ID="nullege"></asp:Label></div>
    </div>--%>
</asp:Content>
