// JScript source code

var Init = {
	FSO: new ActiveXObject("Scripting.FileSystemObject"),
	Shell: new ActiveXObject("WScript.Shell"),
	App: new ActiveXObject("Shell.Application")
};

with (Init) {
	Init.scriptPath = FSO.GetParentFolderName(WScript.ScriptFullName);
	Init.fontsDirPath = Shell.ExpandEnvironmentStrings("%WINDIR%\\Fonts");

	Init.installFont = function (path) {
		if (!(FSO.FileExists(FSO.BuildPath(fontsDirPath, FSO.GetFileName(path))))) {
			var src = FSO.BuildPath(scriptPath, path);
			var dst = App.NameSpace(fontsDirPath);
			WScript.Echo("copying "+src+" into "+fontsDirPath);
			dst.CopyHere(src);
		}
	};
}

for (var i in Init) {
//	WScript.Echo(i + ' = ' + Init[i]);
}
