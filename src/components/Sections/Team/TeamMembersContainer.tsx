import { getTeamMembersData } from '../../../app/actions/getTeamMembersData'; // Server-side fetching function
import { Team } from './Team'; // Client-side component

export default async function TeamMembersContainer(session) {
  const TeamMembersData = await getTeamMembersData(); // Fetching TeamMembers on the server

  return (
    <div>
      {/* Pass the fetched TeamMembersData to the client-side component */}
      <Team TeamMembersData={TeamMembersData} session={session} />
    </div>
  );
}
