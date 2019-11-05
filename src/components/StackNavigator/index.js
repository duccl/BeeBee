import Main from '../Main/index';
import Cadastrar from '../Cadastrar/index';
import Remover from '../Remover';
import Buscar from '../Buscar';
import Listar from '../Listar';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
    createStackNavigator({
        Home: Main,
        Cadastrar: Cadastrar,
        Remover: Remover,
        Buscar: Buscar,
        Listar: Listar
    },
    {
        defaultNavigationOptions: {
            header: null
          },
    })
);

export default Routes;