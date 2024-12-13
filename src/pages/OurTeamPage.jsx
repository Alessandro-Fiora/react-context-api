import TeamCard from "../components/TeamCard";

export default function OurTeamPage() {
  return (
    <div className="container py-5">
      <h1 className="mb-3">Our Team</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        <TeamCard
          img="https://s3-eu-west-1.amazonaws.com/ecs-cards/00000000/00620000/00625100/00625154/images/avatar.jpg"
          title="Alessandro Fiora"
          content="Il creatore del Blog"
        />
      </div>
    </div>
  );
}
