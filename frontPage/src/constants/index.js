import DescriptionIcon from '@material-ui/icons/Description';

export const app = 'APP_BCK';

export const fecthUrl = 'https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true';

export const problems = [
	{
		id: 1,
		title: 'Problema 1',
		description:
			'Describe (lo más detalladamente posible) cómo crearías un stack Postgres/Java8/React. Se espera una descripción de protocolos y componentes.',
		Icon: DescriptionIcon,
		type: 1
	},
	{
		id: 2,
		title: 'Problema 2',

		description: `\n      Desarrollo de un servicio REST, que pueda ser consumido por un WebApp. \n      Este servicio REST debe permitir, mediante un comando POST, obtener la hora en formato UTC de 2 parámetros enviados al servicio: hora y timezone (por ejemplo: dato1=18:31:45, dato2=-3), deberán devolver la hora calculada, en un archivo json con el siguiente formato:\n \n {\n	"response": {\n		"time": "18:43:00",\n		"timezone": "utc"\n	}\n}\n\n      El servicio puede publicarlo donde estime conveniente. Si bien el servicio no es necesario adjuntarlo, si se requiere se entregue el fuente tanto del servicio publicado como del cliente que consume tal servicio, para efectos de visualizar el trabajo realizado. Da lo mismo en que lenguaje se desarrolle el servicio, se sugiere utilizar Java como sistema. Encualquier caso, deberá indicar el lenguaje utilizado.`,
		Icon: DescriptionIcon,
		type: 2
	},
	{
		id: 3,
		title: 'Problema 3',
		subtitle: [ 'Parte I', 'Parte II' ],
		subdescription: [
			`Desarrollar un site implemente un acceso login, haciendo uso de la información contenida en la especificación de la API (via Swagger) ubicada en: https://dev.tuten.cl/TutenREST/#!/user/login \n\n 	Datos a utilizar: \n\nURL: https://dev.tuten.cl/TutenREST/rest/user/testapis%40tuten.cl\napp: APP_BCK \nuser: testapis@tuten.cl \npass: 1234`,
			`Con el token obtenido de la parte I, se debe obtener un listado de datos a mostrar en un datagrid u otro elemento que estime conveniente, referentes al user contacto@tuten.cl.\n La especificación de la API se encuentra ubicada en: \n https://dev.tuten.cl/TutenREST/#!/user/bookings \n\n Datos a utilizar:\n 	API: URL: https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true\n 	adminemail: testapis@tuten.cl\n 	email: contacto@tuten.cl\n 	current: true\n 	app: APP_BCK\n 	token: (usar el token obtenido en la parte I)\n\n Los campos que se necesitan mostrar en la grilla son los siguientes:\n 	a) bookingId (Con el Título "BookingId")\n 	b) firstName y LastName (Con el Título "Cliente")\n 	c) bookingTime (Con el Título "Fecha de Creación")\n 	d) streetAddress (Con el Título "Dirección")\n 	e) bookingPrice (Con el Título "Precio")\n\n 	Esta grilla DEBE poder mostrar todos los registros obtenidos. Además de lo anterior, debe existir alguna opción de filtrado, por el campo bookingId y bookingPrice, y que permita mostrar dinamicamente solo las opciones que corresponden al filtro seleccionado (like y/o >=, <=).`
		],
		description: '',
		Icon: DescriptionIcon,
		type: 3
	}
];

export const solutions = [
	{
		id: 1,
		problemId: 1,
		textSolution: `Para el desarrollo del backend con Java utilizaría el framework de Java: Spring, por lo que se crearía la estructura base del proyecto con Java Spring Boot. Para la capa de persistencia de datos usaría el ORM: Hibernet, a su vez gestionaría dicha capa con Spring Data JPA Repository. Se procede a definir los modelos usando Hibernet, para que posteriormente sean creadas las tablas en la base de datos. Una vez creados los modelos, se crea los respectivos repositorios para definir las operaciones de base de datos que se harán sobre las tablas. En última instancia se crean los end points usando Spring Rest. \n\n 	En el caso del frontend con React, me enfocaría en el desarrollo de componentes funcionales sobre los componentes declarados como clases, esto debido a las ventajas que tienen, como es el caso de los hook; que permiten a un componente funcional hacer casi todo lo que puede hacer un componente como clase, hooks personalizados y el hecho de que pueden ser mucho más fáciles de entender a simple vista. Todo esto sin contar con el hecho de que Webpack compila más rápidamente los componentes funcionales. Para exportar componentes haría exports nombrados para mantener al máximo la coherencia en el código. El estilado de componentes lo haría mediante el uso de la biblioteca Style Components (CSS-in-JS). Para la definición de rutas dentro de la app usaría React Router. En última instancia las peticiones las llevaría a cabo usando la librería Axios junto con el uso de async await. `
	},
	{
		id: 2,
		problemId: 2,
		url: 'https://backend-test-brayhan-tuten.herokuapp.com/api/getTimeUTC'
	},
	{ id: 3, problemId: 3, url: 'https://dev.tuten.cl/TutenREST/rest/user' }
];

export const UTC = {
	initialValue: 0,
	listValues: [
		{ name: 'UTC-12', value: -12 },
		{ name: 'UTC-11', value: -11 },
		{ name: 'UTC-10', value: -10 },
		{ name: 'UTC-9', value: -9 },
		{ name: 'UTC-8', value: -8 },
		{ name: 'UTC-7', value: -7 },
		{ name: 'UTC-6', value: -6 },
		{ name: 'UTC-5', value: -5 },
		{ name: 'UTC-4', value: -4 },
		{ name: 'UTC-3', value: -3 },
		{ name: 'UTC-2', value: -2 },
		{ name: 'UTC-1', value: -1 },
		{ name: 'UTC', value: 0 },
		{ name: 'UTC+1', value: 1 },
		{ name: 'UTC+2', value: 2 },
		{ name: 'UTC+3', value: 3 },
		{ name: 'UTC+4', value: 4 },
		{ name: 'UTC+5', value: 5 },
		{ name: 'UTC+6', value: 6 },
		{ name: 'UTC+7', value: 7 },
		{ name: 'UTC+8', value: 8 },
		{ name: 'UTC+9', value: 9 },
		{ name: 'UTC+10', value: 10 },
		{ name: 'UTC+11', value: 11 },
		{ name: 'UTC+12', value: 12 }
	]
};

export const solutionsTypes = [
	{ id: 1, name: 'Solo texto' },
	{ id: 2, name: 'Consumo de API' },
	{ id: 3, name: 'Login y acceso' }
];

export const technologies = [ 'React', 'React Router', 'Webpack', 'Now', 'Material UI', 'Styled Components ' ];
