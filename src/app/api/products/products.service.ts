import { InMemoryDbService } from "angular-in-memory-web-api";

export class ProductsService implements InMemoryDbService {
    createDb() {
        const products = [
            {
                id: 11,
                name: "Mr. Nice",
                price: 20,
                rating: 1,
                isNew: true,
                image: "http://via.placeholder.com/150x150",
                offlineImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAG1BMVEXMzMyWlpaxsbG3t7ecnJy+vr6qqqrFxcWjo6N3CtnhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABJUlEQVRoge3TQUuEQByG8dec0auuqB01orPCHjoa7W5XjYiOWmAdZyOoo0tBX7vRsTo7p6D3Bysy4OPK/AcgIiIiIiIiIiIiIqL/KQDuEoX15e+SA8jDI9xNYdE7CiCT01YmXf2zlgPN/Q5NHy/vuRcBvNbPvNZrv9fWIdDjWf/65UF5FkDcvsOpZQWUSujsdQdsnwrEuFkehB/A6cLCUfoGYsiVXtsDSRghHW9sgvvPt0o/mur/G60wBf3j14/xVcouWMvABHGo5mCMxj6opyQ1n4wyM0GMMetPFjompk3BJp2DV/qytd0Ur3AHMzZuupuDDzi3G5sxKFd5YQb7JSvnXW5OIrvBHoPTsZuOXqfEYILjsbM7ekREREREREREREREf8AXuoQrzJIYKfkAAAAASUVORK5CYII=",
                description: "Lorem ipsum, dolor sit amet..."
            },
            {
                id: 12,
                name: "Narco",
                price: 20,
                rating: 3,
                isNew: true,
                image: "http://via.placeholder.com/150x150",
                offlineImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAG1BMVEXMzMyWlpaxsbG3t7ecnJy+vr6qqqrFxcWjo6N3CtnhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABJUlEQVRoge3TQUuEQByG8dec0auuqB01orPCHjoa7W5XjYiOWmAdZyOoo0tBX7vRsTo7p6D3Bysy4OPK/AcgIiIiIiIiIiIiIqL/KQDuEoX15e+SA8jDI9xNYdE7CiCT01YmXf2zlgPN/Q5NHy/vuRcBvNbPvNZrv9fWIdDjWf/65UF5FkDcvsOpZQWUSujsdQdsnwrEuFkehB/A6cLCUfoGYsiVXtsDSRghHW9sgvvPt0o/mur/G60wBf3j14/xVcouWMvABHGo5mCMxj6opyQ1n4wyM0GMMetPFjompk3BJp2DV/qytd0Ur3AHMzZuupuDDzi3G5sxKFd5YQb7JSvnXW5OIrvBHoPTsZuOXqfEYILjsbM7ekREREREREREREREf8AXuoQrzJIYKfkAAAAASUVORK5CYII=",
                description: "Lorem ipsum, dolor sit amet..."
            },
            {
                id: 13,
                name: "Bombasto",
                price: 20,
                rating: 5,
                isNew: true,
                image: "http://via.placeholder.com/150x150",
                offlineImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAG1BMVEXMzMyWlpaxsbG3t7ecnJy+vr6qqqrFxcWjo6N3CtnhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABJUlEQVRoge3TQUuEQByG8dec0auuqB01orPCHjoa7W5XjYiOWmAdZyOoo0tBX7vRsTo7p6D3Bysy4OPK/AcgIiIiIiIiIiIiIqL/KQDuEoX15e+SA8jDI9xNYdE7CiCT01YmXf2zlgPN/Q5NHy/vuRcBvNbPvNZrv9fWIdDjWf/65UF5FkDcvsOpZQWUSujsdQdsnwrEuFkehB/A6cLCUfoGYsiVXtsDSRghHW9sgvvPt0o/mur/G60wBf3j14/xVcouWMvABHGo5mCMxj6opyQ1n4wyM0GMMetPFjompk3BJp2DV/qytd0Ur3AHMzZuupuDDzi3G5sxKFd5YQb7JSvnXW5OIrvBHoPTsZuOXqfEYILjsbM7ekREREREREREREREf8AXuoQrzJIYKfkAAAAASUVORK5CYII=",
                description: "Lorem ipsum, dolor sit amet..."
            },
            {
                id: 14,
                name: "Celeritas",
                price: 20,
                rating: 2,
                isNew: true,
                image: "http://via.placeholder.com/150x150",
                offlineImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAG1BMVEXMzMyWlpaxsbG3t7ecnJy+vr6qqqrFxcWjo6N3CtnhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABJUlEQVRoge3TQUuEQByG8dec0auuqB01orPCHjoa7W5XjYiOWmAdZyOoo0tBX7vRsTo7p6D3Bysy4OPK/AcgIiIiIiIiIiIiIqL/KQDuEoX15e+SA8jDI9xNYdE7CiCT01YmXf2zlgPN/Q5NHy/vuRcBvNbPvNZrv9fWIdDjWf/65UF5FkDcvsOpZQWUSujsdQdsnwrEuFkehB/A6cLCUfoGYsiVXtsDSRghHW9sgvvPt0o/mur/G60wBf3j14/xVcouWMvABHGo5mCMxj6opyQ1n4wyM0GMMetPFjompk3BJp2DV/qytd0Ur3AHMzZuupuDDzi3G5sxKFd5YQb7JSvnXW5OIrvBHoPTsZuOXqfEYILjsbM7ekREREREREREREREf8AXuoQrzJIYKfkAAAAASUVORK5CYII=",
                description: "Lorem ipsum, dolor sit amet..."
            },
            {
                id: 15,
                name: "Magneta",
                price: 20,
                rating: 4,
                isNew: true,
                image: "http://via.placeholder.com/150x150",
                offlineImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAG1BMVEXMzMyWlpaxsbG3t7ecnJy+vr6qqqrFxcWjo6N3CtnhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABJUlEQVRoge3TQUuEQByG8dec0auuqB01orPCHjoa7W5XjYiOWmAdZyOoo0tBX7vRsTo7p6D3Bysy4OPK/AcgIiIiIiIiIiIiIqL/KQDuEoX15e+SA8jDI9xNYdE7CiCT01YmXf2zlgPN/Q5NHy/vuRcBvNbPvNZrv9fWIdDjWf/65UF5FkDcvsOpZQWUSujsdQdsnwrEuFkehB/A6cLCUfoGYsiVXtsDSRghHW9sgvvPt0o/mur/G60wBf3j14/xVcouWMvABHGo5mCMxj6opyQ1n4wyM0GMMetPFjompk3BJp2DV/qytd0Ur3AHMzZuupuDDzi3G5sxKFd5YQb7JSvnXW5OIrvBHoPTsZuOXqfEYILjsbM7ekREREREREREREREf8AXuoQrzJIYKfkAAAAASUVORK5CYII=",
                description: "Lorem ipsum, dolor sit amet..."
            },
            {
                id: 16,
                name: "RubberMan",
                price: 20,
                rating: 1,
                isNew: true,
                image: "http://via.placeholder.com/150x150",
                offlineImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAG1BMVEXMzMyWlpaxsbG3t7ecnJy+vr6qqqrFxcWjo6N3CtnhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABJUlEQVRoge3TQUuEQByG8dec0auuqB01orPCHjoa7W5XjYiOWmAdZyOoo0tBX7vRsTo7p6D3Bysy4OPK/AcgIiIiIiIiIiIiIqL/KQDuEoX15e+SA8jDI9xNYdE7CiCT01YmXf2zlgPN/Q5NHy/vuRcBvNbPvNZrv9fWIdDjWf/65UF5FkDcvsOpZQWUSujsdQdsnwrEuFkehB/A6cLCUfoGYsiVXtsDSRghHW9sgvvPt0o/mur/G60wBf3j14/xVcouWMvABHGo5mCMxj6opyQ1n4wyM0GMMetPFjompk3BJp2DV/qytd0Ur3AHMzZuupuDDzi3G5sxKFd5YQb7JSvnXW5OIrvBHoPTsZuOXqfEYILjsbM7ekREREREREREREREf8AXuoQrzJIYKfkAAAAASUVORK5CYII=",
                description: "Lorem ipsum, dolor sit amet..."
            },
            {
                id: 17,
                name: "Dynama",
                price: 20,
                rating: 3,
                isNew: true,
                image: "http://via.placeholder.com/150x150",
                offlineImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAG1BMVEXMzMyWlpaxsbG3t7ecnJy+vr6qqqrFxcWjo6N3CtnhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABJUlEQVRoge3TQUuEQByG8dec0auuqB01orPCHjoa7W5XjYiOWmAdZyOoo0tBX7vRsTo7p6D3Bysy4OPK/AcgIiIiIiIiIiIiIqL/KQDuEoX15e+SA8jDI9xNYdE7CiCT01YmXf2zlgPN/Q5NHy/vuRcBvNbPvNZrv9fWIdDjWf/65UF5FkDcvsOpZQWUSujsdQdsnwrEuFkehB/A6cLCUfoGYsiVXtsDSRghHW9sgvvPt0o/mur/G60wBf3j14/xVcouWMvABHGo5mCMxj6opyQ1n4wyM0GMMetPFjompk3BJp2DV/qytd0Ur3AHMzZuupuDDzi3G5sxKFd5YQb7JSvnXW5OIrvBHoPTsZuOXqfEYILjsbM7ekREREREREREREREf8AXuoQrzJIYKfkAAAAASUVORK5CYII=",
                description: "Lorem ipsum, dolor sit amet..."
            },
            {
                id: 18,
                name: "Dr IQ",
                price: 20,
                rating: 5,
                isNew: true,
                image: "http://via.placeholder.com/150x150",
                offlineImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAG1BMVEXMzMyWlpaxsbG3t7ecnJy+vr6qqqrFxcWjo6N3CtnhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABJUlEQVRoge3TQUuEQByG8dec0auuqB01orPCHjoa7W5XjYiOWmAdZyOoo0tBX7vRsTo7p6D3Bysy4OPK/AcgIiIiIiIiIiIiIqL/KQDuEoX15e+SA8jDI9xNYdE7CiCT01YmXf2zlgPN/Q5NHy/vuRcBvNbPvNZrv9fWIdDjWf/65UF5FkDcvsOpZQWUSujsdQdsnwrEuFkehB/A6cLCUfoGYsiVXtsDSRghHW9sgvvPt0o/mur/G60wBf3j14/xVcouWMvABHGo5mCMxj6opyQ1n4wyM0GMMetPFjompk3BJp2DV/qytd0Ur3AHMzZuupuDDzi3G5sxKFd5YQb7JSvnXW5OIrvBHoPTsZuOXqfEYILjsbM7ekREREREREREREREf8AXuoQrzJIYKfkAAAAASUVORK5CYII=",
                description: "Lorem ipsum, dolor sit amet..."
            },
            {
                id: 19,
                name: "Magma",
                price: 20,
                rating: 2,
                isNew: true,
                image: "http://via.placeholder.com/150x150",
                offlineImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAG1BMVEXMzMyWlpaxsbG3t7ecnJy+vr6qqqrFxcWjo6N3CtnhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABJUlEQVRoge3TQUuEQByG8dec0auuqB01orPCHjoa7W5XjYiOWmAdZyOoo0tBX7vRsTo7p6D3Bysy4OPK/AcgIiIiIiIiIiIiIqL/KQDuEoX15e+SA8jDI9xNYdE7CiCT01YmXf2zlgPN/Q5NHy/vuRcBvNbPvNZrv9fWIdDjWf/65UF5FkDcvsOpZQWUSujsdQdsnwrEuFkehB/A6cLCUfoGYsiVXtsDSRghHW9sgvvPt0o/mur/G60wBf3j14/xVcouWMvABHGo5mCMxj6opyQ1n4wyM0GMMetPFjompk3BJp2DV/qytd0Ur3AHMzZuupuDDzi3G5sxKFd5YQb7JSvnXW5OIrvBHoPTsZuOXqfEYILjsbM7ekREREREREREREREf8AXuoQrzJIYKfkAAAAASUVORK5CYII=",
                description: "Lorem ipsum, dolor sit amet..."
            },
            {
                id: 20,
                name: "Tornado",
                price: 20,
                rating: 4,
                isNew: true,
                image: "http://via.placeholder.com/150x150",
                offlineImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAG1BMVEXMzMyWlpaxsbG3t7ecnJy+vr6qqqrFxcWjo6N3CtnhAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABJUlEQVRoge3TQUuEQByG8dec0auuqB01orPCHjoa7W5XjYiOWmAdZyOoo0tBX7vRsTo7p6D3Bysy4OPK/AcgIiIiIiIiIiIiIqL/KQDuEoX15e+SA8jDI9xNYdE7CiCT01YmXf2zlgPN/Q5NHy/vuRcBvNbPvNZrv9fWIdDjWf/65UF5FkDcvsOpZQWUSujsdQdsnwrEuFkehB/A6cLCUfoGYsiVXtsDSRghHW9sgvvPt0o/mur/G60wBf3j14/xVcouWMvABHGo5mCMxj6opyQ1n4wyM0GMMetPFjompk3BJp2DV/qytd0Ur3AHMzZuupuDDzi3G5sxKFd5YQb7JSvnXW5OIrvBHoPTsZuOXqfEYILjsbM7ekREREREREREREREf8AXuoQrzJIYKfkAAAAASUVORK5CYII=",
                description: "Lorem ipsum, dolor sit amet..."
            }
        ];
        return {products};
    }
}
