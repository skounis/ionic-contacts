export class Contact {
	id?: string;
  firtsname?: string;
  lastname?: string;
	email?: string;
	phones?: Phone[];
}

export class Phone {
  phoneType: string;
  phoneNumber: string;
}
