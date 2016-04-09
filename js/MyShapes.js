///////////////////
// Custom Shapes //
///////////////////

// PCI Slot
function PCI(scene,color,xx,yy,zz)
{
	var group = new THREE.Object3D();
	var black10;	
	if (color == 0x0d0d0d)
		black10 = color;
	else
		black10 = 0x1a1a1a;
	color = [black10, color, color, color, color, color, color, color];
	//basi, empros, endiameso1, endiameso2, piso, aristero, mesaio, deksi tmima
	var pos = [[0,0,0],[0,1.5,1.5],[0,1.5,-0.5],[0,1.5,0.5],[0,1.5,-1.5],[-13.7,1.5,0],[8.5,1.5,0],[13.7,1.5,0]];
	var width = [27.9, 28, 28, 28, 28, 0.7, 0.7, 0.7];
	var height = [0.4, 4, 4, 4, 4, 4, 4, 4];
	var depth =[2.9, 0.5, 0.4, 0.4, 0.5, 3.5, 3.5, 3.5];
	for (i = 0; i < 8; i++)
	{
		var geometry = new THREE.BoxGeometry( width[i], height[i], depth[i] );
		var material = new THREE.MeshPhongMaterial( { color: color[i], specular: color[i] } );
		var pci = new THREE.Mesh( geometry, material );
		pci.position.set(xx + pos[i][0], yy + pos[i][1], zz + pos[i][2]);
		pci.receiveShadow = true;
		pci.castShadow = true;
		//scene.add( pci );
		group.add( pci );
	}
	//dontakia
    for (i = 0; i < 61; i++)
    {
        var geometry = new THREE.BoxGeometry( 0.3, 4, 0.6 );
        var pci = new THREE.Mesh( geometry, material );
        pci.position.set(xx+i*0.45-13.5, yy+1.5,zz+1);
        pci.receiveShadow = true;
        pci.castShadow = true;
        scene.add( pci );
		//summetrika dontakia
        pci = pci.clone();
        pci.position.set(xx+i*0.45-13.5, yy+1.5,zz-1);
        //scene.add( pci );
		group.add( pci );
    }
	group.name = 'PCI';
	scene.add( group );
	geometry.dispose();
	material.dispose();
}

// Capacitor
function Capacitor(scene,color,xx,yy,zz)
{
	var black;
	if (color == 0x0d0d0d)
		black = color;
	else
		black = 0x000000;
	color = [color, black];
	//eswterikos kulindros, periblima
	var radiusTop = [1, 1.01];
	var radiusBottom  = [1, 1.01];
	var openEnded = [false, true];
	for (i = 0; i < 2; i++)
	{
		var geometry = new THREE.CylinderGeometry( radiusTop[i], radiusBottom[i], 4, 32, 1, openEnded[i] );
		var material = new THREE.MeshPhongMaterial( { color: color[i], specular: color[i] } );
		var cylinder = new THREE.Mesh( geometry, material );
		cylinder.position.set(xx, yy, zz);
		cylinder.receiveShadow = true;
		cylinder.castShadow = true;
		scene.add( cylinder );
	}
	geometry.dispose();
	material.dispose();
}

// SATA
function SATA(scene,color,xx,yy,zz)
{
	var red15;	
	if (color == 0x0d0d0d)
		red15 = color;
	else
		red15 = 0x4d0000;
	color = [red15, color, color, color, color, color];
	//basi, empros, piso, aristero, deksi eswteriko tmima
	var pos = [[0,0,0],[0,0.5,1.25],[0,0.5,-1.25],[-0.7,0.5,0],[0.7,0.5,0],[0,0.5,0]];
	var width = [1.5, 1.9, 1.9, 0.5, 0.5, 0.1];
	var height = [0.4, 2, 2, 2, 2, 2];
	var depth =[2.9, 0.5, 0.5, 3, 3, 1];
	for (i = 0; i < 6; i++)
	{
		var geometry = new THREE.BoxGeometry( width[i], height[i], depth[i] );
		var material = new THREE.MeshPhongMaterial( { color: color[i], specular: color[i] } );
		var sata = new THREE.Mesh( geometry, material );
		sata.position.set(xx + pos[i][0], yy + pos[i][1], zz + pos[i][2]);
		sata.receiveShadow = true;
		sata.castShadow = true;
		scene.add( sata );
	}
	geometry.dispose();
	material.dispose();
}

// SouthBridge
function SouthBridge(scene,color,xx,yy,zz)
{
	var black10,white80;	
	if (color == 0x0d0d0d)
	{
		black10 = color;
		white80 = color;
	}
	else
	{
		black10 = 0x1a1a1a;
		white80 = 0xcccccc;
	}
	//basi
	var geometry = new THREE.BoxGeometry( 12, 0.4, 11 );
	var material = new THREE.MeshPhongMaterial( { color: color, specular: color } );
	var SouthBridge = new THREE.Mesh( geometry, material );
	SouthBridge.position.set(xx, yy, zz);
	SouthBridge.receiveShadow = true;
	SouthBridge.castShadow = true;
	scene.add( SouthBridge );
	//chip
	var geometry = new THREE.CylinderGeometry( 5, 5, 1, 8 );
	var material = new THREE.MeshPhongMaterial( { color: black10 } );
	var SouthBridge = new THREE.Mesh( geometry, material );
	SouthBridge.position.set(xx, yy+0.3, zz);
	SouthBridge.rotation.y = Math.PI / 8;
	SouthBridge.receiveShadow = true;
	SouthBridge.castShadow = true;
	scene.add( SouthBridge );	
	// Text
	var loader = new THREE.FontLoader();
	loader.load( 'js/helvetiker_regular.typeface.js', function ( font ) {
		var textGeo = new THREE.TextGeometry( "V/A", {
			font: font, size: 2, height: 1, curveSegments: 12, 
			bevelThickness: 1, bevelSize: 1, bevelEnabled: false
		});
		textGeo.computeBoundingBox();
		var textMaterial = new THREE.MeshPhongMaterial( { color: white80} );
		var mesh = new THREE.Mesh( textGeo, textMaterial );
		mesh.position.set(xx-2.5, yy, zz);
		mesh.rotation.x = -Math.PI / 2;
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		scene.add( mesh );
	});
	geometry.dispose();
	material.dispose();
}

// Battery
function Battery(scene,color,xx,yy,zz)
{
	var black;
	if (color == 0x0d0d0d)
		black = color;
	else
		black = 0x000000;
	color = [color, black];
	//mpataria, ekswteriko periblima
	var radiusTop = [2, 3];
	var radiusBottom  = [2, 3];
	var height  = [1.4, 1];
	for (i = 0; i < 2; i++)
	{
		var geometry = new THREE.CylinderGeometry( radiusTop[i], radiusBottom[i], height[i], 32);
		var material = new THREE.MeshPhongMaterial( { color: color[i], specular: color[i] } );
		var cylinder = new THREE.Mesh( geometry, material );
		cylinder.position.set(xx, yy, zz);
		cylinder.receiveShadow = true;
		cylinder.castShadow = true;
		scene.add( cylinder );
	}	
	//tetragonaki
	var geometry = new THREE.BoxGeometry( 2, 2,2 );
	var material = new THREE.MeshPhongMaterial( { color: black, specular: black } );
	var box = new THREE.Mesh( geometry, material );
	box.position.set(xx, yy+0.5, zz-3);
	box.receiveShadow = true;
	box.castShadow = true;
	scene.add( box );
	geometry.dispose();
	material.dispose();	
}

// RAM
function RAM(scene,color,xx,yy,zz,chip)
{
	var black;	
	if (color == 0x0d0d0d)
	{
		black = green18 = black10 = color;
	}
	else
	{
		black = 0x000000;
		green18 = 0x22421B;
		black10 = 0x1a1a1a;
	}
	color = [black, color, color, color, color, color, color];
	//basi, empros, piso, aristero, deksi tmima, empros, pisw aftaki
	var pos = [[0,0,0],[1.1,0.5,0],[-1.1,0.5,0],[0,1.5,-12.3],[0,1.5,12.3],[0,3.5,12.8],[0,3.5,-12.8]];
	var rot = [0, 0, 0, 0, 0, Math.PI / 2, Math.PI / 2];
	var width = [2.4, 0.5, 0.5, 2.5, 2.5, 2.5, 2.5];
	var height = [0.4, 2, 2, 4, 4, 2, 2];
	var depth =[24.9, 25, 25, 1, 1, 1, 1];
	for (i = 0; i < 7; i++)
	{
		var geometry = new THREE.BoxGeometry( width[i], height[i], depth[i] );
		var material = new THREE.MeshPhongMaterial( { color: color[i], specular: color[i] } );
		var ram = new THREE.Mesh( geometry, material );
		ram.position.set(xx + pos[i][0], yy + pos[i][1], zz + pos[i][2]);
		ram.rotation.x = rot[i];
		ram.receiveShadow = true;
		ram.castShadow = true;
		scene.add( ram );
	}
	//RAM card
    if (chip==true) 
	{
		var geometry = new THREE.BoxGeometry( 0.5, 5, 25 );
		var material = new THREE.MeshPhongMaterial( { color: green18,specular: green18 } );
		var ram = new THREE.Mesh( geometry, material );  
		ram.position.set(xx, yy+3, zz);
		ram.receiveShadow = true;
		ram.castShadow = true;
		scene.add( ram );
	  
		var nofchips = 8
		var geometry = new THREE.BoxGeometry( 1, 2.5, 25/(nofchips+5) );
		var material = new THREE.MeshPhongMaterial( { color: black10, specular: black10 } );
		for (i = 0; i <= nofchips; i++)
		{
			var ram = new THREE.Mesh( geometry, material );  
			ram.position.set(xx, yy+3.5, zz+i*2.5-10);
			ram.receiveShadow = true;
			ram.castShadow = true;
			scene.add( ram );
		}
    }
	geometry.dispose();
	material.dispose();
}

// Chip
function Chip(scene,color,xx,yy,zz)
{
	var geometry = new THREE.BoxGeometry( 2, 1, 3 );
	var material = new THREE.MeshPhongMaterial( { color: color, specular: color } );
	var box = new THREE.Mesh( geometry, material );
	box.position.set(xx, yy+0.2, zz);
	box.receiveShadow = true;
	box.castShadow = true;
	scene.add( box );
	geometry.dispose();
	material.dispose();
}

// Inductor (Coil)
function Inductor(scene,color,xx,yy,zz)
{
	var brown30;	
	if (color == 0x0d0d0d)
		brown30 = color;
	else
		brown30 = 0x664033;
	color = [color, brown30, brown30, brown30, brown30, brown30];
	//Inductor, Coils
	var pos = [[0,0.2,0],[0,1.7,0],[0,1.5,1],[0,0.5,1.5],[0,1.5,-1],[0,0.5,-1.5]];
	var rot = [[0,Math.PI / 2,-Math.PI / 8], [0, 0, 0], [Math.PI / 8, 0, 0], [Math.PI / 3, 0, 0], [-Math.PI / 8, 0, 0], [-Math.PI / 3, 0, 0]];
	var radius = [1.5, 0.6, 0.6, 0.6, 0.6, 0.6];
	var tube  = [0.5, 0.2, 0.2, 0.2, 0.2, 0.2];
	var arc  = [4, 0, 0, 0, 0, 0];
	for (i = 0; i < 6; i++)
	{
		var geometry = new THREE.TorusGeometry( radius[i], tube[i], 20, 50, arc[i] );
		var material = new THREE.MeshPhongMaterial( { color: color[i], specular: color[i] } );
		var inductor = new THREE.Mesh( geometry, material );
		inductor.position.set(xx + pos[i][0], yy + pos[i][1], zz + pos[i][2]);
		inductor.rotation.set(rot[i][0], rot[i][1], rot[i][2]);
		inductor.receiveShadow = true;
		inductor.castShadow = true;
		scene.add( inductor );
	}
	geometry.dispose();
	material.dispose();
}

// Cooler
function Cooler(scene,color,xx,yy,zz)
{
	var material = new THREE.MeshPhongMaterial( { color: color, specular: color } );	
	//katw psuxtra, panw psuxtra
	var pos = [[0,1,0], [-15,1,-20]];
	var pos2 = [[-6,3,-4], [-19,3,-26]];
	var width = [13,9];
	//var height = [3,3];
	var depth =[9,13];
	for (i = 0; i < 2; i++)
	{
		var geometry = new THREE.BoxGeometry( width[i], 3, depth[i] );
		var cooler = new THREE.Mesh( geometry, material );
		cooler.position.set(xx + pos[i][0], yy + pos[i][1], zz + pos[i][2]);
		cooler.receiveShadow = true;
		cooler.castShadow = true;
		scene.add( cooler );
		//dontakia psuxtras
		for (j = 0; j < width[i]; j++)
		{
			for (k = 0; k < depth[i]; k=k+2)
			{
				var geometry = new THREE.BoxGeometry( 0.5, 6, 1 );
				var cooler = new THREE.Mesh( geometry, material );
				cooler.position.set(xx + j + pos2[i][0], yy + pos2[i][1], zz + k + pos2[i][2]);
				cooler.receiveShadow = true;
				cooler.castShadow = true;
				scene.add( cooler );
			}
		}
		//orizontios swlinas, kathetos swlinas
		var height = [8,12];
		var posC = [[-8,1.5,0], [-14.5,1.5,-8]];
		var rot = [[0,Math.PI / 2], [Math.PI / 2,0]];
		var geometry = new THREE.CylinderGeometry( 1, 1, height[i], 32 );
		var cylinder = new THREE.Mesh( geometry, material );
		cylinder.position.set(xx + posC[i][0], yy + posC[i][1], zz + posC[i][2]);
		cylinder.rotation.x = rot[i][0];
		cylinder.rotation.z = rot[i][1];
		cylinder.receiveShadow = true;
		cylinder.castShadow = true;
		scene.add( cylinder );
	}
	//gwnia
	var geometry = new THREE.TorusGeometry( 2.5, 1, 20, 50, 1.5 );
	var torus = new THREE.Mesh( geometry, material );
	torus.position.set(xx-12, yy+1.5, zz-2.5);
	torus.rotation.z = Math.PI / 2;
	torus.rotation.x = Math.PI / 2;
	torus.receiveShadow = true;
	torus.castShadow = true;
	scene.add( torus );
	geometry.dispose();
	material.dispose();
}

// Power
function Power(scene,color,xx,yy,zz)
{
	var gray25;	
	if (color == 0x0d0d0d)
		gray25 = color;
	else
		gray25 = 0x404040;
	color = [gray25, color, color, color, color];
	//basi, deksi, mesaio, aristero tmima
	var pos = [[0,0,0],[1.5,1.5,0],[0,1.5,0],[-1.5,1.5,0]];
	var width = [3.2, 0.3, 0.3, 0.3];
	var height = [0.4, 4, 4, 4];
	var depth =[19.9, 20.3, 20.3, 20.3];
	for (i = 0; i < 4; i++)
	{
		var geometry = new THREE.BoxGeometry( width[i], height[i], depth[i] );
		var material = new THREE.MeshPhongMaterial( { color: color[i], specular: color[i] } );
		var power = new THREE.Mesh( geometry, material );
		power.position.set(xx + pos[i][0], yy + pos[i][1], zz + pos[i][2]);
		power.receiveShadow = true;
		power.castShadow = true;
		scene.add( power );
	}
	//endiamesa tmimata
	for (i = 0; i < 21; i=i+2)
	{
		var geometry = new THREE.BoxGeometry( 2.8, 4, 0.3 );
		var material = new THREE.MeshPhongMaterial( { color: color[1], specular: color[1] } );
		var power = new THREE.Mesh( geometry, material );
		power.position.set(xx, yy +1.5, zz+i-10);
		power.receiveShadow = true;
		power.castShadow = true;
		scene.add( power );
	}
	geometry.dispose();
	material.dispose();
}

// CPU
function CPU(scene,color,xx,yy,zz,fanLight)
{
	var red50, black;	
	if (color == 0x0d0d0d)
	{
		red50 = color;
		black = color;
	}
	else
	{
		red50 = 0xff0000;
		black = 0x000000;
	}	
	
	//psuxtra
	var geometry = new THREE.BoxGeometry( 18, 3, 15 );
	var material = new THREE.MeshPhongMaterial( { color: color, specular: color } );
	var cooler = new THREE.Mesh( geometry, material );
	cooler.position.set(xx, yy+1, zz);
	cooler.receiveShadow = true;
	cooler.castShadow = true;
	scene.add( cooler );
	//dontakia psuxtras
	for (i = 0; i < 18; i++)
	{
		for (j = 0; j < 15; j=j+2)
		{
			var geometry = new THREE.BoxGeometry( 0.5, 6, 1 );
			var material = new THREE.MeshPhongMaterial( { color: color, specular: color } );
			var cooler = new THREE.Mesh( geometry, material );
			cooler.position.set(xx+i-8.5, yy+3, zz+j-7);
			cooler.receiveShadow = true;
			cooler.castShadow = true;
			scene.add( cooler );
		}
	}
	//anemistiras
	//diafanes periblima kai plakes
	var material = new THREE.MeshPhongMaterial( { color: black, specular: black, side: THREE.DoubleSide, opacity: 0.8, transparent: true } );
	//periblima
	var geometry = new THREE.CylinderGeometry( 7, 7, 7, 32, 1, 1);
	var periblima = new THREE.Mesh( geometry, material );
	periblima.position.set(xx, yy+10, zz);
	periblima.receiveShadow = true;
	periblima.castShadow = true;
	scene.add( periblima );
	//plakes
	var pos_plate = [6.5,13.2];
	var pos_mini_cyl = [[[-7,6.5,-6],[7,6.5,-6],[7,6.5,6],[-7,6.5,6]],
						[[-7,13.2,-6],[7,13.2,-6],[7,13.2,6],[-7,13.2,6]]];
	for (i = 0; i < 2; i++)
	{
		//plaka
		var geometry = new THREE.BoxGeometry( 18, 0.5, 15 );
		var plaka = new THREE.Mesh( geometry, material );
		plaka.position.set(xx, yy+pos_plate[i], zz);
		var plakaBSP = new ThreeBSP( plaka );
		//o kulindros einai to proigoumeno periblima
		var periblimaBSP = new ThreeBSP( periblima );
		plakaBSP = plakaBSP.subtract( periblimaBSP );
		//kulindraki k tripes
		var geometry = new THREE.CylinderGeometry( 1, 1, 1, 32 );
		var minicylinder = new THREE.Mesh( geometry, material );		
		for (j = 0; j < 4; j++)
		{
			minicylinder.position.set(xx + pos_mini_cyl[i][j][0], yy + pos_mini_cyl[i][j][1], zz + pos_mini_cyl[i][j][2]);
			var minicylinderBSP = new ThreeBSP( minicylinder );
			plakaBSP = plakaBSP.subtract( minicylinderBSP );
		}
		//metatropi tmimatos kai emfanisi
		var plakaMesh = plakaBSP.toMesh( material );	
		plakaMesh.receiveShadow = true;
		plakaMesh.castShadow = true;
		scene.add( plakaMesh );
	}
	//kokkino xrwma ston anemistiras
	var material = new THREE.MeshPhongMaterial( { color: red50, specular: red50, side: THREE.DoubleSide,} );
	spinFan = new THREE.Object3D();
	//eswterikos kulindros		
	var geometry = new THREE.CylinderGeometry( 2.5, 2.5, 7, 32 );
	var cylinder = new THREE.Mesh( geometry, material );
	cylinder.receiveShadow = true;
	cylinder.castShadow = true;
	spinFan.add( cylinder );
	//fterwti	
	var geometry = new THREE.CylinderGeometry( 6, 6, 0.5, 32, 1, false, 0, 2 );
	var fan = new THREE.Mesh( geometry, material );
	fan.rotation.x = 45 * (Math.PI / 180);
	fan.receiveShadow = true;
	fan.castShadow = true;
	spinFan.add( fan );
	var geometry = new THREE.CylinderGeometry( 6, 6, 0.5, 32, 1, false, 2.1, 2 );
	var fan2 = new THREE.Mesh( geometry, material );
	fan2.rotation.z = -Math.PI / 5;
	fan2.receiveShadow = true;
	fan2.castShadow = true;
	spinFan.add( fan2 );
	var geometry = new THREE.CylinderGeometry( 6, 6, 0.5, 32, 1, false, 4.2, 2 );
	var fan3 = new THREE.Mesh( geometry, material );
	fan3.rotation.x = -Math.PI / 4;
	fan3.receiveShadow = true;
	fan3.castShadow = true;	
	spinFan.add( fan3 );	
	//spinFan.position.set(xx,yy+10,zz);
	if (fanLight == true)
	{		
		var light = new THREE.PointLight( 0xFF0000, 100, 50 );
		light.position.set(xx,yy+10,zz);
		light.add(spinFan);
		scene.add(light);
	}
	else
	{
		spinFan.position.set(xx,yy+10,zz);
		scene.add(spinFan);
	}
	geometry.dispose();
	material.dispose();
}


// Ports
function Ports(scene,color,xx,yy,zz,ethrnetLight)
{
	//Port global settings
	var stdCompLength=5;
	var tallCompHeight=7;
	var stdCompDepth=5;
	var stdUSBboxWidth=0.6;		
	
	var gray50,black,blue50,red50;
	var gold,lampakia,lampakiaLight,soundcolor,hdmicolor;	
	lampakiaLight = [0x00FF00, 0xFFD700];
	if (color == 0x0d0d0d)
	{
		gray50 = black = blue50 = red50 = gold = black = hdmicolor = color;
		soundcolor = [ color, color, color , color, color, color ];
		lampakia = [color, color];
	}
	else
	{
		gray50 = 0x808080;
		black=0x000000;
		blue50=0x0066ff;
		red50=0xFF0000;
		gold = 0xFFD700;
		hdmicolor = 0x2C3539;
		lampakia = [0x00FF00, 0xFFD700];		
		soundcolor = [ 0xC0C0C0, 0xFFC0DB, 0x654321 , 0xBFFF00, 0x00FFFF, 0x9370DB ];
	}
	
	
	//////////////////////
	// INNER Funcctions //
	//////////////////////
	
	// USB
	function createUSBport(scene,xx,yy,zz,color,blue50,black,usbBoxZdisplacement,usbalignment,portNo)
	{
		var colortmp = [color, blue50, black];
		//up portNo lvl edge, interior part, interior base of usb ports
		var pos = [[0,2*portNo,usbBoxZdisp],[-1,1.5+2*portNo+usbalignment,usbBoxZdisp],[0,0.3+2*portNo,usbBoxZdisp]];
		var width = [stdCompLength,2,stdCompLength];
		var height = [stdUSBboxWidth,stdUSBboxWidth,0.1];
		var depth =[stdCompDepth,3,stdCompDepth-0.4];
		for (i=0; i<3; i++)
		{
			var geometry = new THREE.BoxGeometry( width[i], height[i], depth[i] );
			var material = new THREE.MeshPhongMaterial( { color: colortmp[i], specular: colortmp[i] } );
			var usbport = new THREE.Mesh( geometry, material );
			usbport.position.set(xx + pos[i][0],yy + pos[i][1],zz + pos[i][2]);
			usbport.receiveShadow = true;
			usbport.castShadow = true;
			scene.add( usbport );
		}
	}

	// HDMI
	function HDMI(scene,xx,yy,zz,color,black)
	{
		var dimensions=[[0.1,1.7,3],[0.1,1,2.7],[3,0.1,3.1],[3,0.1,2.4],[2.6,0.1,2.9],
						[2.6,0.1,2.2],[3,0.1,2.5],[3,0.8,0.1],[3,0.8,0.1],[3,0.8,0.1],
						[3,0.8,0.1],[3,0.5,0.1],[2.8,0.4,0.1],[3,0.5,0.1],[2.8,0.5,0.1]];
		var displacements=[[1.4,0.2,-10],[1.3,0.5,-10],[0,1,-10],[0,-0.2,-10],[-0.2,0.8,-10],
							[-0.2,0,-10],[0,0.6,-10],[0,0.6,-11.5],[0,0.6,-8.5],[0,0.6,-11.4],
							[0,0.6,-8.6],[0,0,-11.4],[0,0,-11.3],[0,0,-8.7],[0,0,-8.8]];
		var colors=[[gray50,gray50],[black,black],[gray50,gray50],[gray50,gray50],[black,black],
					[black,black],[hdmicolor,hdmicolor],[gray50,gray50],[gray50,gray50],
					[black,black],[black,black],[gray50,gray50],[black,black],[gray50,gray50],
					[black,black]];
		var componentswithrotations=[11,12,13,14];
		var rotations=[-Math.PI/6,-Math.PI/6,Math.PI/5,Math.PI/5];
		var components=15;
		for(var i=0;i<components;i++)
		{
			var geometry = new THREE.BoxGeometry( dimensions[i][0], dimensions[i][1], dimensions[i][2] );
			var material = new THREE.MeshPhongMaterial( { color: colors[i][0], specular: colors[i][1] } );
			var hdmi = new THREE.Mesh( geometry, material );
			hdmi.position.set(xx+displacements[i][0],yy+displacements[i][1],zz+displacements[i][2]);
			var rotationindex=componentswithrotations.indexOf(i);
			if(rotationindex!=-1)
				hdmi.rotation.x = rotations[rotationindex];
			hdmi.receiveShadow = true;
			hdmi.castShadow = true;
			scene.add( hdmi );
		}
	}
	
	// Ethernet
	function ethernet(scene,xx,yy,zz,usbBoxZdisp,color,black)
	{
		var colortmp = [black, color, color, color, color, color, color, color];
		//black base, gray50 base, right wall, left wall, top right lvl 1, top right lvl 2, top left lvl 1, top left lvl 2
		var pos = [[0,3.6,usbBoxZdisp],[0,3.4,usbBoxZdisp],[-2,4.4,0.5],[-2,4.4,-3.5],[-2,5.7,0.2],[-2,5.3,0.3],[-2,5.7,-3.2],[-2,5.3,-3.5]];
		var width = [4, 4, 0.2, 0.2, 0.5, 0.5, 0.5, 0.5];
		var height = [0.2, 0.2, 1.5, 1.5, 0.5, 0.4, 0.4, 0.4];
		var depth = [4, 4, 0.2, 0.2, 1.5, 0.8, 1.5, 0.8];
		for (i=0; i<8; i++)
		{
			var geometry = new THREE.BoxGeometry( width[i], height[i], depth[i] );
			var material = new THREE.MeshPhongMaterial( { color: colortmp[i], specular: colortmp[i] } );
			var usbport = new THREE.Mesh( geometry, material );
			usbport.position.set(xx + pos[i][0],yy + pos[i][1],zz + pos[i][2]);;
			usbport.receiveShadow = true;
			usbport.castShadow = true;
			scene.add( usbport );
		}
		
		//ethernet dontakia gold
		var dontakianumber =5;
		var geometry = new THREE.BoxGeometry( 0.2, 0.5, 0.2 );
		var material = new THREE.MeshPhongMaterial( { color: gold, specular: gold } );
		for (i=0; i<dontakianumber; i++)
		{			
			var usbport = new THREE.Mesh( geometry, material );
			usbport.position.set(xx-2,yy+4,zz-2.5+0.5*i);
			usbport.receiveShadow = true;
			usbport.castShadow = true;
			scene.add( usbport );
		}
		
		//ethernet lights		
		var geometry = new THREE.BoxGeometry( 0.1, 0.3, 0.5 );
		var pos= [[-2.4,5.8,-3.2],[-2.4,5.8,0.3]];
		for (i=0; i<2; i++)
		{
			var material = new THREE.MeshPhongMaterial( { color: lampakia[i], specular: lampakia[i] } );
			var usbport = new THREE.Mesh( geometry, material );			
			usbport.receiveShadow = true;
			usbport.castShadow = true;
			if (ethrnetLight == true)
			{
				var light = new THREE.PointLight( lampakiaLight[i], 5, 5 );
				light.position.set(xx+pos[i][0],yy+pos[i][1],zz+pos[i][2]);
				light.add(usbport);
				scene.add(light);
			}
			else
			{
				usbport.position.set(xx+pos[i][0],yy+pos[i][1],zz+pos[i][2]);
				scene.add( usbport );
			}
		}
	}
	
	// Gray Boxes
	function biggraybox(scene,xx,yy,zz,usbBoxZdisp,color,black)
	{
		var colortmp = [color, black, color, black, color, color, black];
		//box, black right, gray50 left, black left, gray50 top, gray50 back, black back
		var pos = [[0,3,1],[-0.4,3,0.7],[0,3,-4],[-0.4,3,-3.7],[0,6.2,usbBoxZdisp],[2.3,3,usbBoxZdisp],[2,2.8,usbBoxZdisp]];
		var width = [stdCompLength,stdCompLength-1,stdCompLength,stdCompLength-1,stdCompLength,stdUSBboxWidth,0.1];
		var height = [tallCompHeight,tallCompHeight-1,tallCompHeight,tallCompHeight-1,stdUSBboxWidth,tallCompHeight,tallCompHeight];
		var depth = [0.5,0.1,0.5,0.1,stdCompDepth,stdCompDepth,stdCompDepth];
		for (i=0; i<7; i++)
		{
			var geometry = new THREE.BoxGeometry( width[i], height[i], depth[i] );
			var material = new THREE.MeshPhongMaterial( { color: colortmp[i], specular: colortmp[i] } );
			var usbport = new THREE.Mesh( geometry, material );
			usbport.position.set(xx + pos[i][0],yy + pos[i][1],zz + pos[i][2]);;
			usbport.receiveShadow = true;
			usbport.castShadow = true;
			scene.add( usbport );
		}
	}
	
	//////////////////////////
	// END INNER Funcctions //
	//////////////////////////
	
	// base for soundports
	var geometry = new THREE.BoxGeometry( stdCompLength, tallCompHeight, stdCompDepth);
	var material = new THREE.MeshPhongMaterial( { color: gray50, specular: gray50 } );
	var ports = new THREE.Mesh( geometry, material );
	ports.position.set (xx,yy+3,zz+12);
	ports.receiveShadow = true;
	ports.castShadow = true;
	scene.add( ports );
	
	//sound ports 
	var numberOfPortLines=3;
	var numberOfPortsPerLine=2;
	var baseXdisp=-2.7;
	var baseYdisp=1.2;
	var baseZdisp=11;
	var radius = 0.5;
	var tube = 0.2;
	var radialSegments =16;
	var tubularSegments = 16;
	var radiusTop = 0.5;
	var radiusBottom = 0.5;
	var height = 0.3;
	for(portLine=0;portLine<numberOfPortLines;portLine++)
	{
		for(port=0;port<numberOfPortsPerLine;port++)
		{
			//the soundport
			/*selection of a different color per soundport. We have 6 available
			  colors. In order to select these colors, the portLine should be
			  shifted in order to provide the most important bit.
			*/
			var portcolor=soundcolor[portLine*numberOfPortsPerLine+port];
			var geometry = new THREE.TorusGeometry( radius, tube, radialSegments, tubularSegments );
			var material = new THREE.MeshPhongMaterial( { color: portcolor, specular: portcolor } );
			var soundports = new THREE.Mesh( geometry, material );
			//all the ports are in the same X but every line is a different Y
			soundports.position.set( xx+baseXdisp,yy+baseYdisp+portLine*2,zz+baseZdisp+port*2);
			soundports.rotation.y = Math.PI / 2;
			soundports.rotation.z = -Math.PI / 8;
			soundports.receiveShadow = true;
			soundports.castShadow = true;
			scene.add( soundports );
			
			//fill the soundport 
			var cylindergeometry = new THREE.CylinderGeometry( radiusTop, radiusBottom, height );
			var cylindermaterial = new THREE.MeshPhongMaterial( { color: black, specular: black } );
			var soundportDisk = new THREE.Mesh( cylindergeometry, cylindermaterial );
			soundportDisk.position.set(xx+baseXdisp,yy+baseYdisp+portLine*2,zz+baseZdisp+port*2);
			soundportDisk.rotation.y = Math.PI;
			soundportDisk.rotation.z = -Math.PI /2;
			soundportDisk.receiveShadow = true;
			soundportDisk.castShadow = true;
			scene.add( soundportDisk );
		}
	}
	
	//gray50 right box edge that contains the usb ports
	var usbBoxZdisp=5.5;
	var black=0x000000;
	biggraybox(scene,xx,yy,zz+7,usbBoxZdisp-7,color,black);	
	
	var usbportNo = 3;
	var alignment=0;
	//draw the usb3 blue parts and the interior of the ports, each usb port will be above the previous one
	for (var portNo=0; portNo<usbportNo; portNo++  )
	{
		createUSBport(scene,xx,yy,zz,color,blue50,black,usbBoxZdisp,alignment,portNo);
	}
	
	// ================   HDMI PORT 1  ================   
	HDMI(scene,xx-1.2,yy,zz+3.5,color,black);
	
	// ================   HDMI PORT 2  ================   
	// because we are l33t
	HDMI(scene,xx-1.2,yy,zz,color,black);
	
	// ================   ETHERNET BOX  ================ 
	//gray50 right box edge that contains the usb ports
	var usbBoxZdisp=-1.5;
	biggraybox(scene,xx,yy,zz,usbBoxZdisp,color,black);
	
	// ================   ETHERNET PORT  ================   
	ethernet(scene,xx,yy,zz,usbBoxZdisp,color,black);

	// ================ RED  usb ports inside the ETHERNET BOX ================ 
	
	var usbportNo = 2;
	var alignment=-0.5;
	//draw the usb3 blue parts and the interior of the ports, each usb port will be above the previous one
	for (var portNo=0; portNo<usbportNo; portNo++  )
	{
		createUSBport(scene,xx,yy,zz,color,red50,black,usbBoxZdisp,alignment,portNo);
	}
	geometry.dispose();
	material.dispose();
}

//PINS
function PINS (scene,color,xx,yy,zz)
{
	var pinsnumber =10;
	var red50, black, blue50, pinscolor, pinscolor2;	
	if (color == 0x0d0d0d)
	{
		gray50 = blue50 = pinscolor = pinscolor2 = color;
	}
	else
	{
		gray50 = 0x808080;
		blue50=0x0066ff;
		pinscolor = 0xFFD700;
		pinscolor2 = 0x2C3539;
	}
	//////////////////////
	// INNER Funcctions //
	//////////////////////
	
	// USB Pins
	function usbconnectors(scene,color,blue50,pinscolor,xx,yy,zz)
	{
		var dimensions = [[1.5,0.2,2.5],[1.5,1,0.1 ],[1.5,1,0.1],[0.1,1,2.5],[0.1,1,0.8],[0.1,1,0.8]];
		var displacements = [[5,0.2,8],[5,0.8,9.2],[5,0.8,6.7],[4.2,0.8,7.9],[5.8,0.8,8.8],[5.8,0.8,7.1]];
		var colors = [[blue50,blue50],[blue50,blue50],[blue50,blue50],[blue50,blue50],[blue50,blue50],[blue50,blue50]];
		var usbpinumber=6;
		//base
		for (i=0;i<usbpinumber;i++){
			
			var geometry = new THREE.BoxGeometry( dimensions[i][0],dimensions[i][1],dimensions[i][2] );
			var material = new THREE.MeshPhongMaterial( { color: colors[i][0], specular: colors[i][1] } );
			var pins = new THREE.Mesh( geometry, material );
			pins.position.set(xx+displacements[i][0], yy+displacements[i][1], zz+displacements[i][2]);
			pins.receiveShadow = true;
			pins.castShadow = true;
			scene.add( pins );
				
		}
		//pins	
		var pinsnumber =4;
		var geometry = new THREE.BoxGeometry( 0.1, 1.5, 0.1 );
		var material = new THREE.MeshPhongMaterial( { color: pinscolor, specular: pinscolor } );
		for (i=0; i<pinsnumber; i++)
		{		
			for (pinsx=0; pinsx<2; pinsx++){
				var pins = new THREE.Mesh( geometry, material );
				pins.position.set(xx+4.7+0.5*pinsx,yy+0.5,zz+7.3+0.5*i);
				pins.receiveShadow = true;
				pins.castShadow = true;
				scene.add( pins );
			}
		}	
			
	}
	
	//////////////////////////
	// END INNER Funcctions //
	//////////////////////////

	//base
	var geometry = new THREE.BoxGeometry( 1.5,1,5.3 );
	var material = new THREE.MeshPhongMaterial( { color: gray50, specular: gray50 } );
	var pins = new THREE.Mesh( geometry, material );
	pins.position.set(xx+5, yy+0.5, zz);
	pins.receiveShadow = true;
	pins.castShadow = true;
	scene.add( pins );
	//pins	
	
	var geometry = new THREE.BoxGeometry( 0.1, 0.8, 0.1 );
	var material = new THREE.MeshPhongMaterial( { color: pinscolor, specular: pinscolor } );
	for (i=0; i<pinsnumber; i++)
	{		
		for (pinsx=0; pinsx<2; pinsx++){
		  var pins = new THREE.Mesh( geometry, material );
		  pins.position.set(xx+4.7+0.5*pinsx,yy+1.2,zz-2.1+0.5*i);
		  pins.receiveShadow = true;
		  pins.castShadow = true;
		  scene.add( pins );
		}
	}	

	// ================   USB PIN  ================
		usbconnectors(scene,colors,blue50,pinscolor2,29.3,0.2,12);
		usbconnectors(scene,colors,blue50,pinscolor2,29.3,0.2,15);	
}