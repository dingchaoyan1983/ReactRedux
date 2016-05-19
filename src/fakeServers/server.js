import Pretender from 'pretender';
import membershipsOverviewPerformanceRoutes from './Overview/membershipsOverviewPerformance';
import membershipsMapsBranchesRoutes from './maps/membershipsMapsBranches';
import membershipsMapsMembersRoutes from './maps/membershipsMapsMembers';

let server = new Pretender();
server.map(membershipsOverviewPerformanceRoutes);
server.map(membershipsMapsBranchesRoutes);
server.map(membershipsMapsMembersRoutes);

export default server;
