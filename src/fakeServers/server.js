import Pretender from 'pretender';
import friendshipsOverviewPerformanceRoutes from './Overview/friendshipsOverviewPerformance';
import friendshipsMapsBranchesRoutes from './maps/friendshipsMapsBranches';
import friendshipsMapsMembersRoutes from './maps/friendshipsMapsMembers';
import dropoutRiskLevelRoutes from './Overview/DropoutRiskLevel';
import studentsRoutes from 'fakeServers/Resource/Students';

let server = new Pretender();
server.map(friendshipsOverviewPerformanceRoutes);
server.map(friendshipsMapsBranchesRoutes);
server.map(friendshipsMapsMembersRoutes);
server.map(dropoutRiskLevelRoutes);
server.map(studentsRoutes);

export default server;
