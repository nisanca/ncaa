"use client";

export default function MemberList() {
  const members = [
    { id: 1, name: "Andi", email: "andi@mail.com" },
    { id: 2, name: "Budi", email: "budi@mail.com" },
    { id: 3, name: "Citra", email: "citra@mail.com" },
  ];

  return (
    <div className="overflow-x-auto rounded-xl shadow-lg mt-6">
      <table className="min-w-full table-auto border-collapse bg-white">
        <thead className="bg-gradient-to-r from-blue-200 to-blue-100 text-blue-900">
          <tr>
            <th className="p-3 text-left font-semibold">No</th>
            <th className="p-3 text-left font-semibold">Nama</th>
            <th className="p-3 text-left font-semibold">Email</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr
              key={member.id}
              className="hover:bg-blue-50 even:bg-gray-50 transition"
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{member.name}</td>
              <td className="p-3">{member.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
