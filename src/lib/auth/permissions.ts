import { createAccessControl, defaultStatements, adminAc } from 'better-auth/plugins/access';

const statement = {
  ...defaultStatements,
  project: ['create', 'share', 'update', 'delete'],
} as const;

const ac = createAccessControl(statement);

const member = ac.newRole({
  project: ['create'],
});

const proMember = ac.newRole({
  project: ['create', 'share'],
});

const exclusiveMember = ac.newRole({
  project: ['create', 'share', 'update'],
});

const admin = ac.newRole({
  project: ['create', 'share', 'update', 'delete'],
});

const owner = ac.newRole({
  project: ['create', 'share', 'update', 'delete'],
});

export { ac, member, proMember, exclusiveMember, admin, owner, adminAc };
