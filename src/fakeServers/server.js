import Pretender from 'pretender';
import friendshipsOverviewPerformanceRoutes from './Overview/friendshipsOverviewPerformance';
import friendshipsMapsBranchesRoutes from './maps/friendshipsMapsBranches';
import friendshipsMapsMembersRoutes from './maps/friendshipsMapsMembers';

let server = new Pretender();
server.map(friendshipsOverviewPerformanceRoutes);
server.map(friendshipsMapsBranchesRoutes);
server.map(friendshipsMapsMembersRoutes);

export default server;
