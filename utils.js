import GLib from 'gi://GLib';

export const getLanIp = () => {       
    const command_output_bytes = GLib.spawn_command_line_sync('ifdata -pa tun0')[1];
    const command_output_string = String.fromCharCode.apply(null,  command_output_bytes);

    return command_output_string.trim();
}
