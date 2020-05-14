import {
    CSS2DObject
} from "./CSS2DRenderer.js";

function ModuleBuilder(scene,targetList){
    const direction = '+x-z';
    const initX = -470;
    const initZ = 400;
    const rowDistance = 80;
    const serverDistance = 5;
    let server_texture,server_back_texture;
    //机柜宽、高、深
    const cabinet_w = 30;
    const cabinet_h = 70;
    const cabinet_d = 30;
    //服务器宽、高、深
    const server_w = 26;
    const server_h = 4;
    const server_d = 26;
    let _serverList;
    function buildCabinetModule() {
        //机柜宽、高、深
        var cabinetModel = {};
        // 机柜的后
        var geometry = new THREE.BoxGeometry(cabinet_w, cabinet_h, 2);
        var meterial = new THREE.MeshBasicMaterial({color: 0x777777, opacity: 0.2, transparent: true});
        var back = new THREE.Mesh(geometry, meterial);
        cabinetModel.back = back;

        // 机柜的左、右
        var geometry = new THREE.BoxGeometry(cabinet_w, cabinet_h, 2);
        var meterial = new THREE.MeshBasicMaterial({color: 0x777777, opacity: 0.9, transparent: true});
        var left = new THREE.Mesh(geometry, meterial);
        var right = new THREE.Mesh(geometry, meterial);
        cabinetModel.left = left;
        cabinetModel.right = right;

        // 机柜的底部、顶部
        var geometry = new THREE.BoxGeometry(cabinet_w, 2, cabinet_d);
        var meterial = new THREE.MeshBasicMaterial({color: 0x222222, transparent: true});
        var top = new THREE.Mesh(geometry, meterial);
        var bottom = new THREE.Mesh(geometry, meterial);
        cabinetModel.top = top;
        cabinetModel.bottom = bottom;

        // 机柜门
        var geometry = new THREE.BoxGeometry(cabinet_w, cabinet_h, 2);
        var meterial = new THREE.MeshBasicMaterial({color: 0x003333, opacity: 0.5, transparent: true});
        var front = new THREE.Mesh(geometry, meterial);
        cabinetModel.front = front;
        return cabinetModel;
    }

    /**
     *
     * @param rowNum 机柜矩阵行数，平行于X轴
     * @param columnNum 机柜举证列数，平行于Z轴
     * @param direction 朝向：起点位置开始往哪个方向平铺机柜
     *                      -x-z -左上
     *                      -x+z -左下
     *                      +x+z -右下
     *                      +x-z -右上，默认值
     * @param initX 起始机柜坐标X，默认 -470
     * @param initZ 起始机柜坐标Z，默认 400
     */
    this.buildCabinets = function (rowNum,columnNum,callback) {
        const cabinetModel = buildCabinetModule();
        for (let i=0; i<rowNum; i++){
            for (let j=1; j<=columnNum; j++){
                let cabinet = {};
                let location = convertLocationFromRowNumAndColumnNum(i,j,0);
                cabinet.name = String.fromCharCode((65 + i)) + j;

                const px = location.x;
                const py = 0;
                const pz = location.z;
                // 机柜的后
                let back = cabinetModel.back.clone();
                back.position.x = px;
                back.position.y = py + cabinet_h / 2 + 1;
                back.position.z = pz - cabinet_d / 2 + 2;

                back.hover = function (o) {
                    hoverCabinet(o.container);
                }
                back.container = cabinet;

                targetList.push(back);
                scene.add(back);
                cabinet.back = back;

                // 机柜的左、右
                let left = cabinetModel.left.clone();
                let right = cabinetModel.right.clone();

                left.position.x = px + cabinet_w / 2 - 1;
                left.position.y = py + cabinet_h / 2 + 1;
                left.position.z = pz;
                left.rotation.y = Math.PI / 2;

                right.position.x = px - cabinet_w / 2 + 1;
                right.position.y = py + cabinet_h / 2 + 1;
                right.position.z = pz;
                right.rotation.y = -Math.PI / 2;

                left.hover = function (o) {
                    hoverCabinet(o.container);
                }
                left.container = cabinet;
                right.hover = function (o) {
                    hoverCabinet(o.container);
                }
                right.container = cabinet;

                targetList.push(left);
                targetList.push(right);
                scene.add(left);
                scene.add(right);

                cabinet.left = left;
                cabinet.right = right;

                // 机柜的底部、顶部
                var top = cabinetModel.top.clone();
                var bottom = cabinetModel.bottom.clone();

                top.position.x = px;
                top.position.y = py + cabinet_h + 2;
                top.position.z = pz;
                // createCabinetNameTag(top,cabinet.name);

                bottom.position.x = px;
                bottom.position.y = py + 2;
                bottom.position.z = pz;

                top.hover = function (o) {
                    hoverCabinet(o.container);
                }
                top.container = cabinet;
                bottom.hover = function (o) {
                    hoverCabinet(o.container);
                }
                bottom.container = cabinet;

                if (px == initX+12*30) {  //tag显示的行坐标,第12个柜子
                    callback(top,pz);
                }

                targetList.push(top);
                targetList.push(bottom);
                scene.add(top);
                scene.add(bottom);

                cabinet.top = top;
                cabinet.bottom = bottom;

                // 机柜门
                var front = cabinetModel.front.clone();

                front.position.x = px;
                front.position.y = py + cabinet_h / 2 + 1;
                front.position.z = pz + cabinet_d / 2;
                front.toggle = function (o) {
                    if (o.rotation.y == 0) {
                        o.rotation.y = o.rotation.y + Math.PI * 3 / 5;
                        o.position.x = o.position.x + cabinet_w / 2 + 3;
                        o.position.z = o.position.z + cabinet_d / 2;

                        openCabinet(o.container);
                    } else {
                        o.rotation.y = o.rotation.y - Math.PI * 3 / 5;
                        o.position.x = o.position.x - cabinet_w / 2 - 3;
                        o.position.z = o.position.z - cabinet_d / 2;


                        closeCabinet(o.container);
                    }
                }
                front.hover = function (o) {
                    hoverCabinet(o.container);
                }
                front.container = cabinet;

                targetList.push(front);
                scene.add(front);
                cabinet.front = front;
                cabinet.servers = [];
            }
        }
    }


    function createCabinetNameTag(mesh,cabinetName) {
        let div = document.createElement('div');
        div.innerHTML = cabinetName;
        div.style.fontSize = '12px';
        div.style.color = '#80E6EF';
        div.style.visibility = "hidden";
        div.class = 'cabinetName';
        document.body.appendChild(div);
        let tag = new CSS2DObject(div);
        mesh.add(tag);
    }

    // rowNum=0,columnNum=0 => x=initX, z=initZ
    // rowNum=0,columnNum=1 => x=initX+1*30, z=initZ
    // rowNum=1,columnNum=0 => x=initX+0*30, z=initZ+1*80
    // rowNum=1,columnNum=1 => x=initX+1*30, z=initZ+1*80
    function convertLocationFromRowNumAndColumnNum (rowNum,columnNum,height){
        let object = {};
        object.x = initX + columnNum * cabinet_w;
        object.y = height * 2 + 2 ;
        object.z = initZ - rowNum * rowDistance;
        return object;
    }

    // 处理鼠标HHover机柜时，机柜信息的内容渲染
    function hoverCabinet(o) {
        //do something
    }
    // 处理机柜打开、关闭时，信息的展示和隐藏
    function openCabinet(o) {
        console.log('openCabinet:' + o.name + " position{x:" + o.front.position.x + " y:"+ o.front.position.y + " z:" + o.front.position.z + "}");
    }

    function closeCabinet(o) {
        $("#serverForm").hide();
        // 关闭机柜门时，将机柜中的服务器收起
        for (let i = 0; i < _serverList.length; i++) {
            if (_serverList[i].position.z + 2 == o.front.position.z
                && _serverList[i].position.x == o.front.position.x) {
                _serverList[i].position.z -= server_d / 2;
                closeServer(_serverList[i]);
            }
        }
        console.log('closeCabinet:' + o.name + " position{x:" + o.front.position.x + " y:"+ o.front.position.y + " z:" + o.front.position.z + "}");
    }


    //服务器宽、高、深
    function buildServerModel() {
        server_texture = new THREE.TextureLoader().load('../images/server.png', server_texture => {
            server_texture.wrapS = server_texture.wrapT = THREE.ClampToEdgeWrapping;
            server_texture.repeat.set(1, 1);
            server_texture.minFilter = THREE.LinearFilter
        })

        server_back_texture = new THREE.TextureLoader().load('../images/server-back.png', server_back_texture => {
            server_back_texture.wrapS = server_back_texture.wrapT = THREE.ClampToEdgeWrapping;
            server_back_texture.repeat.set(1, 1);
            server_back_texture.minFilter = THREE.LinearFilter
        })

        var geometry = new THREE.BoxGeometry(server_w, server_h, server_d);
        var material = [];
        material.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
        material.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
        material.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
        material.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
        material.push(new THREE.MeshBasicMaterial({map: server_texture}));
        material.push(new THREE.MeshBasicMaterial({map: server_back_texture}));

        let serverModel = new THREE.Mesh(geometry, material);
        return serverModel;
    }

    function buildServers(serverData,callback,serverList) {
        let serverModel = buildServerModel();
        for (let i = 0; i <serverData.length; i++) {
            // 服务器
            const server = serverModel.clone();
            let materialArray = [];
            // order to add materials: x+,x-,y+,y-,z+,z-
            materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
            materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
            materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
            materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
            materialArray.push(new THREE.MeshBasicMaterial({map: server_texture}));
            materialArray.push(new THREE.MeshBasicMaterial({map: server_back_texture}));
            serverModel.material = materialArray;
            let locationArr = serverData[i].location.split("-");
            let rowNum = locationArr[3].substr(1,1).charCodeAt() - 65;
            let columnNum = locationArr[3].substr(2,3);
            let height = locationArr[4];
            let position = convertLocationFromRowNumAndColumnNum(rowNum,columnNum,height);
            server.position.x = position.x;
            server.position.y = position.y;
            server.position.z = position.z;

            server.toggle = function (o, openOrClose) {
                // 关闭同一机柜中的其他服务器
                for (let i = 0; i < serverList.length; i++) {
                    if (serverList[i].position.z - server_d / 2 == o.position.z
                        && serverList[i].position.x == o.position.x ) {
                        serverList[i].position.z = o.position.z ;
                        //
                        closeServer(serverList[i]);
                    }
                }

                if (o.position.z == position.z) {
                    if (openOrClose == null || openOrClose) {
                        o.position.z = o.position.z + server_d / 2;
                        // 打开服务器时，处理其他逻辑
                        openServer(o);
                    }
                } else {
                    if (openOrClose == null || !openOrClose) {
                        o.position.z = o.position.z - server_d / 2;
                        // 关上服务器时，处理其他逻辑
                        closeServer(o);
                    }
                }
            }
            server.info = serverData[i];
            server.hover = function (o, event) {
                callback(o,event);
            }

            scene.add(server);
            targetList.push(server);
            serverList.push(server);
        }
        _serverList = serverList;
    }

    // 处理服务器打开、关闭时，信息的展示和隐藏
    function openServer(o) {
        o.material[2].color.setRGB(1, 0, 0);
        o.geometry.colorsNeedUpdate = true;
        console.log('openServer:' + o.info.host_name + " position{x:" + o.position.x + " y:"+ o.position.y + " z:" + o.position.z + "}");
    }
    function closeServer(o) {
        o.material[2].color.setRGB(0.73, 0.73, 0.73);
        o.geometry.colorsNeedUpdate = true;
        $("#serverForm").hide();
        console.log('closeServer:' + o.info.host_name + " position{x:" + o.position.x + " y:"+ o.position.y + " z:" + o.position.z + "}");
    }


    this.createDevice = function (w, h, d, px, py, pz, info) {
        let texture = new THREE.TextureLoader().load('data:image/png;base64,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', texture => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(1, 1);
            texture.minFilter = THREE.LinearFilter;
        })

        var geometry = new THREE.BoxGeometry(w, h, d);
        var materialArray = [];
        materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
        materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
        materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
        materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
        materialArray.push(new THREE.MeshBasicMaterial({map: texture}));
        materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));

        var dev = new THREE.Mesh(geometry, materialArray);

        dev.position.x = px;
        dev.position.y = py;
        dev.position.z = pz;

        scene.add(dev);
        targetList.push(dev);

        dev.info = info;

        //
        var geometry2 = new THREE.BoxGeometry(w + 2, h + 1, d + 2);
        var meterial2 = new THREE.MeshBasicMaterial({color: info.color, opacity: 0.6, transparent: true});

        var dev_out = new THREE.Mesh(geometry2, meterial2);
        dev_out.position.x = px;
        dev_out.position.y = py;
        dev_out.position.z = pz;

        scene.add(dev_out);

        return dev;
    }


    this.createStandAir = function (w, h, d, px, py, pz) {
        let texture = new THREE.TextureLoader().load('data:image/png;base64,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', texture => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(1, 1);
            texture.minFilter = THREE.LinearFilter;
        })

        var geometry = new THREE.BoxGeometry(w, h, d);
        var materialArray = [];
        // order to add materials: x+,x-,y+,y-,z+,z-
        materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
        materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
        materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
        materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
        materialArray.push(new THREE.MeshBasicMaterial({map: texture}));
        materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));

        var air = new THREE.Mesh(geometry, materialArray);

        air.position.x = px;
        air.position.y = py;
        air.position.z = pz;

        air.info = {};
        air.info.name = "空调";
        scene.add(air);
        targetList.push(air);

        return air;
    }

    this.createFloor = function (width, height) {
        // FLOOR

        var loader = new THREE.TextureLoader();
        loader.load("../images/floor.jpg", function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(10, 10);
            texture.minFilter = THREE.LinearFilter;
            var floorGeometry = new THREE.PlaneGeometry(width, height);
            var floorMaterial = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});
            var floor = new THREE.Mesh(floorGeometry, floorMaterial);
            //floor.position.y = -0.5;
            floor.rotation.x = Math.PI / 2;

            // floor.position.x = 0;
            // floor.position.y = 0;
            // floor.position.z = 0;

            scene.add(floor);
            return floor;
        });

    }

    this.createWall = function (w, h, px, py, pz, rx, ry, rz) {
        let wallTexture = new THREE.TextureLoader().load('data:image/jpeg;base64,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', wallTexture => {
            wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
            wallTexture.repeat.set(w / 20, h / 20);
        })

        var wallGeometry = new THREE.BoxGeometry(w, h, 5);
        var wallMaterial = new THREE.MeshBasicMaterial({map: wallTexture, side: THREE.DoubleSide});
        var wall = new THREE.Mesh(wallGeometry, wallMaterial);
        wall.position.x = px;
        wall.position.y = py;
        wall.position.z = pz;

        wall.rotation.y = ry;

        scene.add(wall);
        targetList.push(wall);

        return wall;
    }

    this.createGlassWall = function (w, h, px, py, pz, rx, ry, rz) {
        var geometry = new THREE.BoxGeometry(w, h, 2);
        var meterial = new THREE.MeshBasicMaterial({
            color: 0x003333,
            opacity: 0.4,
            transparent: true,
            side: THREE.DoubleSide
        });
        var glassW = new THREE.Mesh(geometry, meterial);

        glassW.position.x = px;
        glassW.position.y = py;
        glassW.position.z = pz;

        glassW.rotation.y = ry;

        scene.add(glassW);
        targetList.push(glassW);

        return glassW;
    }

    this.createColumn = function (w, h, px, py, pz) {
        var geometry = new THREE.BoxGeometry(w, h, w);
        var meterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            opacity: 1,
            transparent: true,
            side: THREE.DoubleSide
        });
        var column = new THREE.Mesh(geometry, meterial);

        column.position.x = px;
        column.position.y = py;
        column.position.z = pz;

        scene.add(column);
        targetList.push(column);

        return column;
    }

    this.createDoor = function (w, h, px, py, pz, rx, ry, rz) {

        let texture = new THREE.TextureLoader().load('data:image/jpeg;base64,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', texture => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(w / 50, w / 50);
        })

        var geometry = new THREE.BoxGeometry(w, h, 3);
        var material = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});
        var door = new THREE.Mesh(geometry, material);
        door.position.x = px;
        door.position.y = py;
        door.position.z = pz;

        scene.add(door);
        targetList.push(door);

        return door;
    }

    this.createWindow = function (w, h, px, py, pz, rx, ry, rz) {
        var geometry = new THREE.PlaneGeometry(w, h);
        var meterial = new THREE.MeshBasicMaterial({
            color: 0x00fff0,
            opacity: 0.5,
            transparent: true,
            side: THREE.DoubleSide
        });
        var windw = new THREE.Mesh(geometry, meterial);

        windw.position.x = px;
        windw.position.y = py;
        windw.position.z = pz;

        scene.add(windw);
        targetList.push(windw);

        return windw;
    }

    this.createFireExtinguisher = function (w, h, px, py, pz) {
        let texture = new THREE.TextureLoader().load('data:image/png;base64,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', texture => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(1, 1);
        })

        //var geometry = new THREE.BoxGeometry(w, h, w);
        var geometry = new THREE.CylinderGeometry(w, w, h, 20, 4);
        //var material = new THREE.MeshBasicMaterial( { map: texture } );

        var materialArray = [];
        materialArray.push(new THREE.MeshBasicMaterial({map: texture}));
        materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));
        materialArray.push(new THREE.MeshBasicMaterial({color: 0xbbbbbb}));

        var fe = new THREE.Mesh(geometry, materialArray);
        fe.position.x = px;
        fe.position.y = py;
        fe.position.z = pz;

        scene.add(fe);
        targetList.push(fe);

        //return fe;

        var geometry = new THREE.SphereGeometry(w, 32, 16, 0, 2 * Math.PI, 0, Math.PI / 2);
        var material = new THREE.MeshBasicMaterial({color: 0xff0000});
        var fe = new THREE.Mesh(geometry, material);
        fe.position.x = px;
        fe.position.y = py + h / 2;
        fe.position.z = pz;

        scene.add(fe);
        targetList.push(fe);

        var geometry = new THREE.CylinderGeometry(3, 3, 5, 20, 4)
        var material = new THREE.MeshBasicMaterial({color: 0x000000});
        var fe = new THREE.Mesh(geometry, material);
        fe.position.x = px;
        fe.position.y = py + h / 2 + w;
        fe.position.z = pz;

        scene.add(fe);
        targetList.push(fe);
    }

    this.findServerByLocation = function (location,pageNum,callback,serverList){
        // const url = "http://10.211.202.2:8082/";
        // // const url = "http://localhost:8082/";
        // $.ajax({
        //     type: "GET",
        //     url: url + "cpms/v1/topo/countServerByLocation",
        //     data: {location},
        //     dataType: "json",
        //     success: function(serverNum){
        //         console.log(serverNum);
        //         let startPage = 0;
        //         if (serverNum > 0){
        //             for (let i=0;i<=serverNum/pageNum;i++){
        //                 startPage = i*pageNum;
        //                 $.ajax({
        //                     type: "GET",
        //                     url: url + "cpms/v1/topo/findServerByLocation",
        //                     data: {location,startPage,pageNum},
        //                     dataType: "json",
        //                     success: function(serverData){
        //                         buildServers(serverData,callback,serverList);
        //                     }
        //                 });
        //             }
        //         }
        //     }
        // });
        buildServers(serverData,callback,serverList);
    }
}

export { ModuleBuilder };