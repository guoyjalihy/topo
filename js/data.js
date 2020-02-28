// 定义机柜、服务器数据
var model = [
    //1
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -470, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -440, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -410, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -380, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -350, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -320, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -290, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -260, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -230, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -200, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '1',
                'id': 1,
                'name':'1号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -170, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':50},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '2',
                'id': 2,
                'name':'2号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -140, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':60},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '3',
                'id': 3,
                'name':'3号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -110, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':60},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '4',
                'id': 4,
                'name':'4号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -80, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':40},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '5',
                'id': 5,
                'name':'5号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -50, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            },
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -20, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 10, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 40, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 70, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 100, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 130, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 160, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 190, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 210, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 240, y: 0, z: 400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },

    //2
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -470, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -440, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuAlloc':90},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuAlloc':80},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuAlloc':70},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuAlloc':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuAlloc':50},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuAlloc':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuAlloc':30}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -410, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -380, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -350, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -320, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -290, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -260, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -230, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -200, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '1',
                'id': 1,
                'name':'1号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -170, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':50},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '2',
                'id': 2,
                'name':'2号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -140, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':60},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '3',
                'id': 3,
                'name':'3号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -110, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':60},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '4',
                'id': 4,
                'name':'4号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -80, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':40},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '5',
                'id': 5,
                'name':'5号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -50, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            },
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -20, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 10, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 40, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 70, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 100, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 130, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 160, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 190, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 210, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 240, y: 0, z: 320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },

    //3
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -470, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -440, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -410, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -380, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -350, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -320, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -290, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -260, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -230, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -200, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '1',
                'id': 1,
                'name':'1号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -170, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':50},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '2',
                'id': 2,
                'name':'2号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -140, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':60},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '3',
                'id': 3,
                'name':'3号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -110, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':60},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '4',
                'id': 4,
                'name':'4号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -80, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':40},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '5',
                'id': 5,
                'name':'5号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -50, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            },
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -20, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 10, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 40, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 70, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 100, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 130, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 160, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 190, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 210, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 240, y: 0, z: 240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },

    //4
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -470, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -440, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -410, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -380, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -350, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -320, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -290, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -260, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -230, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -200, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '1',
                'id': 1,
                'name':'1号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -170, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':50},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '2',
                'id': 2,
                'name':'2号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -140, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':60},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '3',
                'id': 3,
                'name':'3号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -110, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':60},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '4',
                'id': 4,
                'name':'4号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -80, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':40},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '5',
                'id': 5,
                'name':'5号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -50, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            },
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -20, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 10, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 40, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 70, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 100, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 130, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 160, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 190, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 210, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 240, y: 0, z: 160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },

    //5
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -470, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -440, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -410, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -380, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -350, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -320, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -290, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -260, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -230, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -200, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '1',
                'id': 1,
                'name':'1号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -170, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':50},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '2',
                'id': 2,
                'name':'2号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -140, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':60},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '3',
                'id': 3,
                'name':'3号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -110, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':60},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '4',
                'id': 4,
                'name':'4号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -80, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':40},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '5',
                'id': 5,
                'name':'5号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -50, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            },
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -20, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 10, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 40, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 70, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 100, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 130, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 160, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 190, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 210, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 240, y: 0, z: 80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },

    //6
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -470, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -440, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -410, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -380, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -350, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -320, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -290, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -260, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -230, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -200, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40,'cpuAlloc':60,'memAlloc':60},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40,'cpuAlloc':40,'memAlloc':60},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40,'cpuAlloc':30,'memAlloc':20},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60,'cpuAlloc':90,'memAlloc':30},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40,'cpuAlloc':70,'memAlloc':50},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40,'cpuAlloc':10,'memAlloc':10},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60,'cpuAlloc':80,'memAlloc':70}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '1',
                'id': 1,
                'name':'1号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -170, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '2',
                'id': 2,
                'name':'2号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -140, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '3',
                'id': 3,
                'name':'3号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -110, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '31', 'id':31, 'name':'', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '4',
                'id': 4,
                'name':'4号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -80, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '5',
                'id': 5,
                'name':'5号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -50, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            },
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -20, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 10, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 40, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 70, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 100, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 130, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 160, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 190, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 210, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 240, y: 0, z: 0}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },


    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -470, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -440, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -410, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -380, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -350, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -320, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -290, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -260, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -230, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -200, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '1',
                'id': 1,
                'name':'1号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -170, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '2',
                'id': 2,
                'name':'2号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -140, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '3',
                'id': 3,
                'name':'3号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -110, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '31', 'id':31, 'name':'', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '4',
                'id': 4,
                'name':'4号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -80, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '5',
                'id': 5,
                'name':'5号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -50, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            },
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -20, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 10, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 40, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 70, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuAlloc':60,'memAlloc':60,'memUsed':60,'cpus':60},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuAlloc':60,'memAlloc':70,'memUsed':60,'cpus':20},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuAlloc':60,'memAlloc':30,'memUsed':20,'cpus':60},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuAlloc':60,'memAlloc':10,'memUsed':60,'cpus':90},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuAlloc':60,'memAlloc':80,'memUsed':30,'cpus':60},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuAlloc':60,'memAlloc':20,'memUsed':90,'cpus':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuAlloc':60,'memAlloc':10,'memUsed':60,'cpus':50}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 100, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 130, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 160, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 190, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 210, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 240, y: 0, z: -80}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },

    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -470, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -440, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -410, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -380, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -350, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -320, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -290, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -260, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -230, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -200, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '1',
                'id': 1,
                'name':'1号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -170, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '2',
                'id': 2,
                'name':'2号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -140, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '3',
                'id': 3,
                'name':'3号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -110, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '31', 'id':31, 'name':'', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '4',
                'id': 4,
                'name':'4号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -80, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '5',
                'id': 5,
                'name':'5号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -50, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            },
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -20, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 10, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 40, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 70, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 100, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 130, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 160, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 190, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 210, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 240, y: 0, z: -160}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },

    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -470, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -440, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -410, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -380, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -350, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -320, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -290, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -260, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -230, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -200, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '1',
                'id': 1,
                'name':'1号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -170, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '2',
                'id': 2,
                'name':'2号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -140, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '3',
                'id': 3,
                'name':'3号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -110, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '31', 'id':31, 'name':'', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '4',
                'id': 4,
                'name':'4号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -80, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '5',
                'id': 5,
                'name':'5号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -50, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            },
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -20, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 10, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 40, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 70, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 100, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 130, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 160, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 190, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 210, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 240, y: 0, z: -240}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },

    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -470, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -440, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -410, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -380, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -350, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -320, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -290, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -260, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -230, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -200, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '1',
                'id': 1,
                'name':'1号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -170, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '2',
                'id': 2,
                'name':'2号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -140, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '3',
                'id': 3,
                'name':'3号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -110, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '31', 'id':31, 'name':'', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '4',
                'id': 4,
                'name':'4号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -80, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '5',
                'id': 5,
                'name':'5号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -50, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            },
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -20, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 10, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 40, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 70, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 100, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 130, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 160, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 190, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 210, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 240, y: 0, z: -320}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },

    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -470, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -440, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -410, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -380, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -350, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -320, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -290, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -260, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -230, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -200, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '1',
                'id': 1,
                'name':'1号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -170, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '2',
                'id': 2,
                'name':'2号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -140, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '3',
                'id': 3,
                'name':'3号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸
                'position': {x: -110, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '31', 'id':31, 'name':'', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '4',
                'id': 4,
                'name':'4号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -80, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '5',
                'id': 5,
                'name':'5号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -50, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            },
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: -20, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 10, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 40, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 70, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 100, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '6',
                'id': 6,
                'name':'6号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 130, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '7',
                'id': 7,
                'name':'7号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 160, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': ''},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': ''}
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '8',
                'id': 8,
                'name':'8号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 190, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '9',
                'id': 9,
                'name':'9号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 210, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '21', 'id':21, 'name':'', 'ip':'', 'apps': ''},
                ]
            }
    },
    {
        cabinet:
            {
                'uuid': '10',
                'id': 10,
                'name':'10号机柜',
                'size': {w: 30, h: 70, d: 30}, // 尺寸 宽、高、深
                'position': {x: 240, y: 0, z: -400}, // 位置
                'servers': [
                    {'uuid': '11', 'id':11, 'name':'1号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':40},
                    {'uuid': '12', 'id':12, 'name':'2号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '13', 'id':13, 'name':'3号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '14', 'id':14, 'name':'4号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60},
                    {'uuid': '15', 'id':15, 'name':'5号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':65,'temperature':40},
                    {'uuid': '16', 'id':16, 'name':'6号服务器', 'ip':'', 'apps': '','cpuUsed': 64,'memUsed':25,'temperature':40},
                    {'uuid': '17', 'id':17, 'name':'7号服务器', 'ip':'', 'apps': '','cpuUsed': 34,'memUsed':25,'temperature':60}
                ]
            }
    },
];