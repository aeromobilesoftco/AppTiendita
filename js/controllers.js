angular.module('app.controllers', ['ngCordova'])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('inicioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('productosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloudCtrl', ['$scope', '$stateParams', '$cordovaDialogs' , // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaDialogs) {

	$scope.clkfinse=function()
	{
		document.addEventListener("deviceready", function () 
		{
			  $cordovaDialogs.confirm('¿Desea cerrar sesion?', 'Atencion', ['Confirmar','Cancelar'])
			    .then(function(buttonIndex) {
			      // no button = 0, 'OK' = 1, 'Cancel' = 2
			      var btnIndex = buttonIndex;

			      if (buttonIndex==1)
			      {

					  $cordovaDialogs.alert('Adios','Atencion', 'Aceptar')
					    .then(function() {
					      // callback success
					    });				      	
			      }

			    });		
		}, false);
	}


}])
      
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('perfilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('actualizaTusDatosCtrl', ['$scope', '$stateParams', '$cordovaDialogs' ,// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaDialogs) {

	$scope.clkact=function()
	{
		document.addEventListener("deviceready", function () 
		{
		  $cordovaDialogs.alert('Sus datos han sido modificados','Atencion', 'Aceptar')
		    .then(function() {
		      // callback success
		    });			
		}, false);
	}

	$scope.clkelim=function()
	{
		document.addEventListener("deviceready", function () 
		{
			  $cordovaDialogs.confirm('¿Desea eliminar su cuenta?', 'Atencion', ['Confirmar','Cancelar'])
			    .then(function(buttonIndex) {
			      // no button = 0, 'OK' = 1, 'Cancel' = 2
			      var btnIndex = buttonIndex;

			      if (buttonIndex==1)
			      {

					  $cordovaDialogs.alert('Su cuenta ha sido eliminada','Atencion', 'Aceptar')
					    .then(function() {
					      // callback success
					    });				      	
			      }

			    });		
		}, false);
	}	

}])
   
.controller('registrarseCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cambiarContraseACtrl', ['$scope', '$stateParams', '$cordovaDialogs' , // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaDialogs) {

	$scope.clkcamcon=function()
	{
		document.addEventListener("deviceready", function () 
		{
			  $cordovaDialogs.confirm('¿Desea modificar sus datos?', 'Atencion', ['Confirmar','Cancelar'])
			    .then(function(buttonIndex) {
			      // no button = 0, 'OK' = 1, 'Cancel' = 2
			      var btnIndex = buttonIndex;

			      if (buttonIndex==1)
			      {

					  $cordovaDialogs.alert('Su cuenta ha sido actualizada','Atencion', 'Aceptar')
					    .then(function() {
					      // callback success
					    });				      	
			      }

			    });		
		}, false);
	}	

}])
   
.controller('ediciNDeProductoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('crearProductoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('detalleDeProductoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
