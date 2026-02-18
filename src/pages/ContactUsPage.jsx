import { Github, Linkedin } from 'lucide-react';

function ContactUsPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Ogechi Ogharandukun',
      role: 'Scrum Master',
      github: 'https://github.com/Mide02-Project',
      linkedin: 'https://www.linkedin.com/in/ogechi-ogharandukun/',
    },
    {
      id: 2,
      name: 'Peter Kabamba',
      role: 'Web Developer',
      github: 'https://github.com/Pietrols',
      linkedin: 'https://linkedin.com/in/peter-kabamba-959a061b9',
    },
    {
      id: 3,
      name: 'Lawrence Narh-Lawson',
      role: 'Web Developer',
      github: 'https://github.com/lawlawson',
      linkedin: 'https://www.linkedin.com/in/lawlawson/',
    },
  ];

  return (
    <div className='max-w-6xl mx-auto px-4 py-12'>
      {/* Header */}
      <div className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
          Get In Touch
        </h1>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Meet the talented team behind InterviewFlow. We're passionate about
          helping you ace your interviews. Reach out to any of our team members
          on LinkedIn.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 justify-items-center'>
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 hover:border-yellow-400'>
            {/* Member Card Background */}
            <div className='bg-linear-to-br from-yellow-400 to-yellow-300 h-24'></div>

            {/* Member Info */}
            <div className='px-6 py-6 text-center'>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                {member.name}
              </h3>
              <p className='text-gray-600 text-sm mb-4 font-medium'>
                {member.role}
              </p>

              {/* Social Links */}
              <div className='flex gap-4 justify-center'>
                <a
                  href={member.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 rounded-full bg-gray-100 hover:bg-yellow-400 transition duration-200'>
                  <Github size={28} className='text-gray-900' />
                </a>
                <a
                  href={member.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 rounded-full bg-gray-100 hover:bg-yellow-400 transition duration-200'>
                  <Linkedin size={28} className='text-gray-900' />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Info Section */}
      <div className='bg-gray-50 rounded-lg border border-gray-200 p-8 text-center'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
          Other Ways to Reach Us
        </h2>
        <p className='text-gray-600 mb-6'>
          Have questions or suggestions? Feel free to contact us via email.
        </p>
        <a
          href=''
          className='inline-block px-8 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition shadow-lg hover:shadow-xl'>
          Send us an Email
        </a>
      </div>
    </div>
  );
}

export default ContactUsPage;
