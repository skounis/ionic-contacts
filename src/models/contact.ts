export class Contact {
	id?: string;
  firstname?: string;
  lastname?: string;
	email?: string;
	phones?: Phone[];

	static instance(): Contact {
		const c = new Contact();
		c.firstname = '';
		c.lastname = '';
		c.email = '';
		c.phones = [];

		return c;
	}
}

export class Phone {
  phoneType: string;
  phoneNumber: string;
}
