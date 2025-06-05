'use client';

import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { logout } from '../services/authService';
import Link from 'next/link';
import { Flex, Button, Box, Text, Avatar, DropdownMenu } from '@radix-ui/themes';

const Navbar = () => {
  const { user, isAdmin, isVeterinarian } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/auth/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Flex
      justify="between"
      align="center"
      p="4"
      style={{
        borderBottom: '1px solid var(--gray-5)',
        position: 'sticky',
        top: 0,
        backgroundColor: 'white',
        zIndex: 10
      }}
    >
      <Flex align="center" gap="4">
        <Link href="/" passHref>
          <Text size="5" weight="bold" style={{ cursor: 'pointer' }}>
            PetPal
          </Text>
        </Link>

        {user && (
          <Flex gap="4">
            <Link href="/pets" passHref>
              <Text style={{ cursor: 'pointer' }}>My Pets</Text>
            </Link>
            <Link href="/appointments" passHref>
              <Text style={{ cursor: 'pointer' }}>Appointments</Text>
            </Link>
            <Link href="/calendar" passHref>
              <Text style={{ cursor: 'pointer' }}>Calendar</Text>
            </Link>
            <Link href="/care-providers" passHref>
              <Text style={{ cursor: 'pointer' }}>Care Providers</Text>
            </Link>
            <Link href="/dashboard" passHref>
              <Text style={{ cursor: 'pointer' }}>Dashboard</Text>
            </Link>
          </Flex>
        )}
      </Flex>

      <Flex align="center" gap="4">
        {user ? (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="ghost">
                <Flex align="center" gap="2">
                  <Avatar
                    size="2"
                    src={user.imageUrl || ''}
                    fallback={user.firstName?.charAt(0) || 'U'}
                    radius="full"
                  />
                  <Text>{user.firstName} {user.lastName}</Text>
                </Flex>
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
                <Link href="/profile" passHref style={{ width: '100%' }}>
                  Profile
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item color="red" onClick={handleLogout}>
                Logout
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        ) : (
          <Flex gap="2">
            <Link href="/auth/login" passHref>
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/auth/register" passHref>
              <Button>Register</Button>
            </Link>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;