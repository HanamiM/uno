/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
class WindowManagerGetClientViewSizeParams
{
	/* Pack=4 */
	HtmlId : number;
	public static unmarshal(pData:number) : WindowManagerGetClientViewSizeParams
	{
		let ret = new WindowManagerGetClientViewSizeParams();
		
		{
			ret.HtmlId = Number(Module.getValue(pData + 0, "*"));
		}
		return ret;
	}
}
