import StudentCard from './StudentCard';

function App() {
  return (
    <div>
      <StudentCard
        name="Emily Carter"
        major="Computer Science"
        year="Sophomore"
        bio="I enjoy building interactive web apps and working on open source projects in my spare time."
        imageUrl="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop&crop=face"
      />
    </div>
  );
}

export default App;
