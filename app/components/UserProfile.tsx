
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface UserProfileProps {
  isAuthenticated: boolean;
}

export default function UserProfile({ isAuthenticated }: UserProfileProps) {
    const router = useRouter(); // ✅ Move useRouter to top level

    const handleLogout = async (e: React.FormEvent) => {
      e.preventDefault();
      console.log("logout");

  
      try {
        localStorage.removeItem("token");
        toast.success('Successfully logout');
        router.push("/"); // ✅ Now this is valid
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      {!isAuthenticated ? (
        <Link
          href="/login"
          className="text-sm/6 font-semibold text-gray-900 ring-1 py-2 px-3 rounded-md ring-gray-300 ring-inset hover:bg-gray-50"
        >
          Log in <span aria-hidden="true">&rarr;</span>
        </Link>
      ) : (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full items-center justify-center gap-x-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-gray-300 ring-inset hover:bg-gray-50">
              <Image
                src="/images/user.png"
                alt="User Profile"
                className="h-6 w-6 rounded-full"
                width={36}
                height={36}
              />
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  href="/account"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Account
                </Link>
              </MenuItem>
              <MenuItem>
                <button
                  type="submit"
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Log out
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      )}
    </div>
  );
}
