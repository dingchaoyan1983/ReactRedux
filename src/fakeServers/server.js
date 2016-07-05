import Pretender from 'pretender';
import friendshipsOverviewPerformanceRoutes from './Overview/friendshipsOverviewPerformance';
import friendshipsMapsBranchesRoutes from './maps/friendshipsMapsBranches';
import friendshipsMapsMembersRoutes from './maps/friendshipsMapsMembers';
import dropoutRiskLevelRoutes from './Overview/DropoutRiskLevel';

let server = new Pretender();
server.map(friendshipsOverviewPerformanceRoutes);
server.map(friendshipsMapsBranchesRoutes);
server.map(friendshipsMapsMembersRoutes);
server.map(dropoutRiskLevelRoutes);

export default server;
