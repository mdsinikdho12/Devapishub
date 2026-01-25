import { Mail, Crown, User } from "lucide-react";
import Image from "next/image";
import ActionButtons from "./ActionButton";

function UserTable({ users = [] }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded ">
      <div className="p-6 border-b border-slate-800 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-[#7B61FF]">
            Registered Users
          </h2>
          <p className="text-xs text-slate-500">Manage all platform users</p>
        </div>

        <input
          type="text"
          placeholder="Search user..."
          className="bg-slate-800 border border-slate-700 rounded px-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="">
        <table className="w-full text-sm">
          <thead className="bg-slate-950/60 text-slate-500 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-4 text-left">User</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Plan</th>
              <th className="px-6 py-4 text-right">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-white/[0.03] transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center">
                      {user.image ? (
                        <Image
                          src={user.image}
                          alt={user.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      ) : (
                        <User size={18} className="text-slate-500" />
                      )}
                    </div>

                    <div>
                      <p className="font-medium text-white">
                        {user.name || "Anonymous"}
                      </p>
                      <p className="text-xs text-slate-500">
                        ID: {user._id.slice(-6).toUpperCase()}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Email */}
                <td className="px-6 py-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Mail size={14} />
                    {user.email}
                  </div>
                </td>

                {/* Plan */}
                <td className="px-6 py-4">
                  {user.subscriptionPlan === "premium" ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Crown size={12} />
                      Premium
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-400 border border-slate-700">
                      Free
                    </span>
                  )}
                </td>

                {/* Action */}
                <td className="px-6 py-4 text-right">
                  <ActionButtons user={JSON.parse(JSON.stringify(user))} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <div className="p-10 text-center text-slate-500 text-sm">
            No users found
          </div>
        )}
      </div>
    </div>
  );
}

export default UserTable;
